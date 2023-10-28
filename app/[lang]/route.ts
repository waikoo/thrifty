import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const DEFAULT_CATEGORY = 'women'
const DEFAULT_LANGUAGE = 'en'

export async function GET(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/en') || req.nextUrl.pathname.startsWith('/de')) {
    redirect(`${DEFAULT_LANGUAGE}/${DEFAULT_CATEGORY}`);
  } else if (req.nextUrl.pathname.startsWith('/admin')) {
    redirect(`${DEFAULT_LANGUAGE}/admin`);
  }
}
