import { NextRequest, NextResponse } from "next/server";
import { handleCategory, handleLocale } from "./middlewares";

export async function middleware(req: NextRequest) {

  if (req.nextUrl.pathname === "/profile/update") {
    return NextResponse.next();
  }
  const localeRedirect = await handleLocale(req)
  if (localeRedirect) return localeRedirect

  const categoryRedirect = await handleCategory(req)
  if (categoryRedirect) return categoryRedirect
  console.log(req.nextUrl.pathname)
  // const [lang, category] = req.nextUrl.pathname.toString().split('/').filter(Boolean)

  // req.context.lang = lang
  // req.context.category = category

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next).*)'],
};

