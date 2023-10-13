import { NextRequest, NextResponse } from "next/server";

export default async function handleCategory(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const defaultCategory = 'women';
  const categories = ['men', 'women', 'kids']

  if (!categories.some(category => pathname.includes(category))) {
    req.nextUrl.pathname = `${pathname}/${defaultCategory}`;
    return NextResponse.redirect(req.nextUrl);
  }
}

