import { NextRequest, NextResponse } from "next/server";
import { handleCategory, handleLocale } from "./middlewares";

export async function middleware(req: NextRequest) {

  const localeRedirect = await handleLocale(req)
  if (localeRedirect) return localeRedirect

  const categoryRedirect = await handleCategory(req)
  if (categoryRedirect) return categoryRedirect

  // const [lang, category] = req.nextUrl.pathname.toString().split('/').filter(Boolean)

  console.log(req)
  // req.context.lang = lang
  // req.context.category = category

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next).*)'],
};

