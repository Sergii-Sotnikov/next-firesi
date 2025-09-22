import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl; // удобнее, чем new URL(req.url)
  const host = req.headers.get("host") || url.host;
  const proto =
    req.headers.get("x-forwarded-proto")?.toLowerCase() ||
    url.protocol.replace(":", "").toLowerCase();


  if (host === "www.firetech.com.ua") {
    url.host = "firetech.com.ua";
    return NextResponse.redirect(url, { status: 301 });
  }


  if (proto !== "https") {
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }


  if (url.pathname === "/&") {
    url.pathname = "/";
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};