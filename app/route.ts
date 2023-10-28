import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const DEFAULT_CATEGORY = 'women'
const DEFAULT_LANGUAGE = 'en'

export async function GET(req: NextRequest) {
  redirect(`${DEFAULT_LANGUAGE}/${DEFAULT_CATEGORY}`);
}
