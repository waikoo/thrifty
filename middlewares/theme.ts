import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const theme = (middleware: NextMiddleware) => {
  return async (req: NextRequest, e: NextFetchEvent) => {

    if (!req.nextUrl.searchParams.has("theme")) {
      const currentUrl = new URL(req.nextUrl.href, req.url);
      currentUrl.searchParams.append("theme", "dark");

      return NextResponse.redirect(currentUrl);
    }
    return middleware(req, e);
  };
};
