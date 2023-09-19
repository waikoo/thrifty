import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLocale, locales, cookieName } from "../app/i18n/settings";

acceptLanguage.languages(locales);

export const locale = (middleware: NextMiddleware) => {

  return async (req: NextRequest, e: NextFetchEvent) => {
    const locale = getLocale(req)

    if (
      !locales.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
      !req.nextUrl.pathname.startsWith("/_next")
    ) {
      return NextResponse.redirect(new URL(`/${locale}${req.nextUrl.pathname}`, req.url));
    }

    if (req.headers.has("referer")) {
      const refererUrl = new URL(req.headers.get("referer")!);
      const localeInReferer = locales.find((l) => refererUrl.pathname.startsWith(`/${l}`));
      const response = NextResponse.next();
      if (localeInReferer) response.cookies.set(cookieName, localeInReferer);
      return response;
    }

    return middleware(req, e);
  };
};

const getLocale = (req: NextRequest) => {
  if (req.cookies.has(cookieName)) {
    return acceptLanguage.get(req.cookies.get(cookieName)?.value)
  }
  if (req.headers.has("Accept-Language")) {
    return acceptLanguage.get(req.headers.get("Accept-Language"));
  }
  return fallbackLocale;
}
