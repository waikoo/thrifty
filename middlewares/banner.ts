import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const banner = (middleware: NextMiddleware) => {
  return async (req: NextRequest, e: NextFetchEvent) => {
    if (req) {
      const queryParams = req.nextUrl.searchParams;

      if (!queryParams.has("b")) {
        const currentUrl = new URL(req.nextUrl.pathname, req.url)
        currentUrl.searchParams.append('b', 'true')

        return NextResponse.redirect(currentUrl);
      }
      return middleware(req, e);
    }
  };
};
