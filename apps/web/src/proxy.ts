import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "sw"] as const;
type Locale = (typeof LOCALES)[number];

function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

function detectLocaleFromHeader(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return "en";
  const lower = acceptLanguage.toLowerCase();
  if (lower.includes("sw")) return "sw";
  return "en";
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ignore next internals / api / files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // already has locale
  const first = pathname.split("/")[1];
  if (isLocale(first)) {
    const res = NextResponse.next();
    res.cookies.set("locale", first, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  }

  // no locale -> decide
  const cookieLocale = req.cookies.get("locale")?.value;
  const localeFromCookie =
    cookieLocale && isLocale(cookieLocale) ? cookieLocale : null;

  const localeFromHeader = detectLocaleFromHeader(
    req.headers.get("accept-language")
  );

  const locale = localeFromCookie ?? localeFromHeader;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
