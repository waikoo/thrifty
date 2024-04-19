import { Gender, Locales } from "@/types/link"

export default function getLangAndGender(pathname: string): { lang: Locales, gender: Gender } {
  let pathnameArr
  if (pathname) {
    pathnameArr = pathname.split('/')
  }

  if (!pathnameArr) {
    return {
      lang: 'en',
      gender: 'women'
    }
  }

  return {
    lang: pathnameArr[1] as Locales,
    gender: pathnameArr[2] as Gender,
  }
}
