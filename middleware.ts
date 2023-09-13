import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (!req.nextUrl.searchParams.get("b")) {
    return NextResponse.redirect(new URL("/?b=true", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
