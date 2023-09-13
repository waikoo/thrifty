import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const banner = (middleware: NextMiddleware) => {
  return async (req: NextRequest, e: NextFetchEvent) => {
    if (req) {
      const queryParams = req.nextUrl.searchParams;

      if (!queryParams.has("b")) {
        return NextResponse.redirect(new URL("/?b=true", req.url));
      }
      return middleware(req, e);
    }
  };
};
