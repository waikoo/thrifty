import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const DEFAULT_CATEGORY = 'women'

export async function GET(req: NextRequest) {
  redirect(`${req.nextUrl.pathname}/${DEFAULT_CATEGORY}`);
}
