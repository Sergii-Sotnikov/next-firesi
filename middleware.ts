import { NextResponse } from "next/server";
export function middleware(req: Request) {
  const url = new URL(req.url);
  if (url.pathname === "/&") {
    url.pathname = "/";
    return NextResponse.redirect(url, { status: 301 });
  }
  return NextResponse.next();
}