import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const host = req.headers.get("host") || url.host;


  const isProd = process.env.NODE_ENV === "production";
  const isPreview = process.env.VERCEL_ENV === "preview"; // Vercel preview
  const isLocalHost =
    host === "localhost" ||
    host?.startsWith("127.0.0.1") ||
    host?.startsWith("::1") ||
    host?.startsWith("192.168.") ||
    host?.endsWith(".local");


  const protoHeader = req.headers.get("x-forwarded-proto");
  const proto = (protoHeader || url.protocol.replace(":", "")).toLowerCase();


  if (host === "www.firetech.com.ua") {
    const to = url.clone();
    to.host = "firetech.com.ua";
    return NextResponse.redirect(to, { status: 308 });
  }


  if (isProd && !isPreview && !isLocalHost && proto !== "https") {
    const to = url.clone();
    to.protocol = "https:";
    return NextResponse.redirect(to, { status: 308 });
  }


  if (url.pathname === "/&") {
    const to = url.clone();
    to.pathname = "/";
    return NextResponse.redirect(to, { status: 308 });
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|fonts/|images/|api/health).*)",
  ],
};