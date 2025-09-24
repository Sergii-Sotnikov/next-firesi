// src/lib/telegram.ts
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

/**
 * Екранує спецсимволи для HTML (Telegram parse_mode: "HTML").
 */
export function htmlEscape(text: string = ""): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

/**
 * Склеює рядки повідомлення в один HTML-текст,
 * ігноруючи порожні елементи.
 */
export function buildHtmlMessage(segments: string[]): string {
  return segments.filter(Boolean).join("\n");
}

/**
 * Надсилає HTML-повідомлення до Telegram з простим exponential backoff.
 */
export async function sendTelegramMessage(htmlMessage: string): Promise<void> {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.warn("TELEGRAM_* envs missing; skip Telegram");
    return;
  }

  let attempt = 0;
  const maxAttempts = 3;
  let backoffMs = 400;

  while (attempt < maxAttempts) {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: htmlMessage,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );
    
    if (response.ok) return;
    

    // Ретраїмо на лімітах/тимчасових збоях
    if (response.status === 429 || response.status >= 500) {
      await new Promise((resolve) => setTimeout(resolve, backoffMs));
      attempt += 1;
      backoffMs *= 2;
      continue;
    }

    throw new Error(await response.text());
  }

  throw new Error("Telegram failed after retries");
}