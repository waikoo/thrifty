import { NextRequest, NextResponse } from "next/server";

export default async function handleCategory(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const defaultCategory = 'women';

  if (!pathname.includes(defaultCategory)) {
    req.nextUrl.pathname = `${pathname}/${defaultCategory}`;
    return NextResponse.redirect(req.nextUrl);
  }
}

