import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || url.host;

  const isProd = process.env.NODE_ENV === "production";
  const isPreview = process.env.VERCEL_ENV === "preview";
  const isLocalHost =
    host === "localhost" ||
    host?.startsWith("127.0.0.1") ||
    host?.startsWith("::1") ||
    host?.startsWith("192.168.") ||
    host?.endsWith(".local");

  const protoHeader = req.headers.get("x-forwarded-proto");
  const proto = (protoHeader || url.protocol.replace(":", "")).toLowerCase();


  const targetHost = host === "www.firetech.com.ua" ? "firetech.com.ua" : host;
  const shouldForceHttps = isProd && !isPreview && !isLocalHost;
  const targetProto = shouldForceHttps ? "https" : proto;


  if (url.pathname === "/&") {
    url.pathname = "/";
  }

  const needHostChange = targetHost !== host;
  const needProtoChange = targetProto !== proto;

  if (needHostChange || needProtoChange) {
    url.host = targetHost;
    url.protocol = `${targetProto}:`;
    return NextResponse.redirect(url, { status: 308 });
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|assets/|fonts/|images/).*)",
  ],
};
