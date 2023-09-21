import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const defaultCategory = "women"

export const category = (middleware: NextMiddleware) => {
  return async (req: NextRequest, e: NextFetchEvent) => {

    if (!req.nextUrl.searchParams.has("category")) {
      const currentUrl = new URL(req.nextUrl.href, req.url);
      currentUrl.searchParams.append("category", defaultCategory);

      return NextResponse.redirect(currentUrl);
    }
    return middleware(req, e);
  };
};
