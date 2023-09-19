import { NextMiddleware, NextResponse } from "next/server";

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

export const chain = (functions: MiddlewareFactory[], i = 0): NextMiddleware => {
  const current = functions[i];

  if (current) {
    const next = chain(functions, i + 1);
    return current(next);
  }

  return () => NextResponse.next();
};
