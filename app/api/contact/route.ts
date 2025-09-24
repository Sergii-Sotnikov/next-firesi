import { NextRequest, NextResponse } from "next/server";
import { htmlEscape, buildHtmlMessage, sendTelegramMessage } from "@/src/lib/telegram";

type Payload = {
  token: string;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  message?: string;
  company?: string; // honeypot
};

function isBlankString(value: unknown): boolean {
  return typeof value !== "string" || value.trim() === "";
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as Payload;

    // 1) Honeypot: якщо заповнено — удаємо успіх і нічого не робимо
    if (typeof payload.company === "string" && payload.company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const { token, type, name, email, phone, product, message } = payload || {};

    // 2) Базова валідація
    if (isBlankString(token)) {
      return NextResponse.json({ error: "Missing reCAPTCHA token" }, { status: 400 });
    }
    if (isBlankString(name) || (isBlankString(phone) && isBlankString(email))) {
      return NextResponse.json(
        { error: "name, phone OR email are required" },
        { status: 400 }
      );
    }

    // 3) Перевірка reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      return NextResponse.json(
        { error: "Server misconfiguration: RECAPTCHA_SECRET_KEY" },
        { status: 500 }
      );
    }

    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: String(token),
      }),
    });

    if (!recaptchaResponse.ok) {
      const recaptchaText = await recaptchaResponse.text();
      return NextResponse.json(
        { error: "reCAPTCHA service error", detail: recaptchaText },
        { status: 502 }
      );
    }

    const recaptchaData = (await recaptchaResponse.json()) as { success: boolean };
    if (!recaptchaData.success) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 });
    }

    // 4) Дані часу (Україна)
    const timeUA = new Intl.DateTimeFormat("uk-UA", {
      timeZone: "Europe/Kyiv",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
      .format(new Date())
      .replace(",", "");

    const safeName = String(name ?? "").trim();
    const safePhone = String(phone ?? "").trim();
    const safeEmail = String(email ?? "").trim();
    const safeProduct = String(product ?? "").trim();
    const safeMessage = String(message ?? "").trim();
    const safeType = String(type ?? "Замовити дзвінок").trim();

    // 5) EmailJS payload
    const emailJsBody: Record<string, unknown> = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        type: safeType,
        name: safeName,
        time: timeUA,
        phone: safePhone,
        product: safeProduct,
        message: safeMessage,
        email: safeEmail,
      },
    };
    if (process.env.EMAILJS_PRIVATE_KEY) {
      emailJsBody["accessToken"] = process.env.EMAILJS_PRIVATE_KEY;
    }

    const emailSendPromise = fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://firetech.com.ua",
      },
      body: JSON.stringify(emailJsBody),
    }).then(async (emailResponse) => {
      if (!emailResponse.ok) {
        const emailText = await emailResponse.text();
        throw new Error(emailText);
      }
    });

    // 6) Telegram HTML
    const telegramHtml = buildHtmlMessage([
      `<b>${htmlEscape(safeType)}</b>`,
      `🕒 <b>Час:</b> ${htmlEscape(timeUA)}`,
      `👤 <b>Ім'я:</b> ${htmlEscape(safeName)}`,
      safePhone ? `📞 <b>Телефон:</b> ${htmlEscape(safePhone)}` : "",
      safeEmail ? `✉️ <b>Email:</b> ${htmlEscape(safeEmail)}` : "",
      safeProduct ? `📦 <b>Продукт:</b> ${htmlEscape(safeProduct)}` : "",
      safeMessage ? `📝 <b>Повідомлення:</b>\n${htmlEscape(safeMessage)}` : "",
    ]);

    const telegramSendPromise = sendTelegramMessage(telegramHtml);

    // 7) Паралельно відправляємо. Успіх — якщо хоч один канал спрацював
    const deliveryResults = await Promise.allSettled([emailSendPromise, telegramSendPromise]);
    const atLeastOneDelivered = deliveryResults.some(
      (result) => result.status === "fulfilled"
    );

    if (!atLeastOneDelivered) {
      const detail = deliveryResults
        .map((result, index) =>
          result.status === "rejected"
            ? `task${index + 1}: ${(result.reason as Error).message}`
            : `task${index + 1}: ok`
        )
        .join("; ");
      return NextResponse.json({ error: "Delivery failed", detail }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
