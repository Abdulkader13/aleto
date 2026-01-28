import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "ar", "ru", "fr", "tr"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore Next.js internals and static files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  const pathnameSegments = pathname.split("/").filter(Boolean);
  const locale = pathnameSegments[0];

  // If the locale is missing or invalid, redirect to default
  if (!locales.includes(locale)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
