import { Gender, Locales } from "@/types/link"

export default function getLangAndGender(pathname: string) {
  const pathnameArr = pathname.split('/')

  return {
    lang: pathnameArr[1] as Locales,
    gender: pathnameArr[2] as Gender,
  }
}
