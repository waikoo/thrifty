import { Category, Locales } from "@/types/home"

export default function getLangAndGender(pathname: string) {
  return {
    lang: pathname.split('/')[1] as Locales,
    gender: pathname.split('/')[2] as Category['category']
  }
}
