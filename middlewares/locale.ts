import { getLocaleFromHeaders } from "@/utils/i18n";
import { NextRequest, NextResponse } from "next/server";

const defaultCategory = 'women';
export default async function handleLocale(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const headersLocale = getLocaleFromHeaders(req);

  const locales = ['en', 'de']

  if (!locales.some(locale => pathname.startsWith(`/${locale}`))) {
    const newPathname = `/${headersLocale}/${defaultCategory}`;
    req.nextUrl.pathname = newPathname;
    return NextResponse.redirect(req.nextUrl);
  }
}
