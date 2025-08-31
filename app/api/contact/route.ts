import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    if (typeof payload.company === "string" && payload.company.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const { token, type, name, email, phone, product, message } = payload || {};

    const isEmpty = (v: unknown) => typeof v !== "string" || v.trim() === "";
    if (isEmpty(token)) {
      return NextResponse.json(
        { error: "Missing reCAPTCHA token" },
        { status: 400 }
      );
    }

    if (
      isEmpty(name) ||
      (isEmpty(phone) && isEmpty(email)) ||
      isEmpty(message)
    ) {
      return NextResponse.json(
        { error: "name, phone OR email, and message are required" },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!,
          response: token as string,
        }),
      }
    );
    if (!verifyRes.ok) {
      const text = await verifyRes.text();
      return NextResponse.json(
        { error: "reCAPTCHA service error", detail: text },
        { status: 502 }
      );
    }
    const data = await verifyRes.json();
    if (!data.success) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    const time = new Intl.DateTimeFormat("uk-UA", {
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

      
    const body: Record<string, unknown> = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      template_params: {
        type: type || "Замовити дзвінок",
        name,
        time,
        phone: phone || "",
        product: product || "",
        message,
        email: email || "",
      },
    };
    if (process.env.EMAILJS_PRIVATE_KEY) {
      body["accessToken"] = process.env.EMAILJS_PRIVATE_KEY;
    }

    const sendRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://firetech.com.ua",
      },
      body: JSON.stringify(body),
    });
    if (!sendRes.ok) {
      const text = await sendRes.text();
      return NextResponse.json(
        { error: "EmailJS request failed", detail: text },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
