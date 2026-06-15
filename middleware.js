import { NextResponse } from "next/server";
import { getAuthSecret, verifyAdminSession } from "./src/lib/auth/session";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const authSecret = getAuthSecret();

  if (!authSecret || authSecret.length < 32) {
    return NextResponse.redirect(new URL("/admin/login?reason=not-configured", request.url));
  }

  const sessionToken = request.cookies.get("nawasena_admin")?.value;
  const session = await verifyAdminSession(sessionToken, authSecret);

  if (session) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.redirect(new URL("/admin/login", request.url));
}

export const config = {
  matcher: ["/admin/:path*"],
};
