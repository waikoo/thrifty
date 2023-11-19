import { Category, Locales } from "@/types/home"

export default function getLangAndCategory(pathname: string) {
  return {
    lang: pathname.split('/')[1] as Locales,
    category: pathname.split('/')[2] as Category['category']
  }
}
