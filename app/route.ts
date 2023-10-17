import { redirect } from "next/navigation";

const DEFAULT_CATEGORY = 'women'
const DEFAULT_LANGUAGE = 'en'

export async function GET() {
  redirect(`${DEFAULT_LANGUAGE}/${DEFAULT_CATEGORY}`);
}
