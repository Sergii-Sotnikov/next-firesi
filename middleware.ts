import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || url.host;

  // прод/локалка
  const isProd = process.env.NODE_ENV === "production";
  const isPreview = process.env.VERCEL_ENV === "preview"; // Vercel preview
  const isLocalHost =
    host === "localhost" ||
    host?.startsWith("127.0.0.1") ||
    host?.startsWith("::1") ||
    host?.startsWith("192.168.") ||
    host?.endsWith(".local");

  // нормалізуємо протокол
  const protoHeader = req.headers.get("x-forwarded-proto");
  const proto = (protoHeader || url.protocol.replace(":", "")).toLowerCase();

  // 1) WWW → apex (постійно, бо на локалці це не спрацює)
  if (host === "www.firetech.com.ua") {
    const to = url.clone();
    to.host = "firetech.com.ua";
    return NextResponse.redirect(to, { status: 308 });
  }

  // 2) Форсимо HTTPS лише в проді (і не у preview), і точно не для локалки
  if (isProd && !isPreview && !isLocalHost && proto !== "https") {
    const to = url.clone();
    to.protocol = "https:";
    return NextResponse.redirect(to, { status: 308 });
  }

  // 3) Фікс дивного шляху "/&" → "/"
  if (url.pathname === "/&") {
    const to = url.clone();
    to.pathname = "/";
    return NextResponse.redirect(to, { status: 308 });
  }

  return NextResponse.next();
}

// ВАЖЛИВО: не чіпаємо статичні файли, _next, і т.п. — це зменшує ризик зайвих редіректів
export const config = {
  matcher: [
    // все, окрім статичних асетів і служебних шляхів
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts/|images/|api/health).*)",
  ],
};