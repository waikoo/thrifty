import Link from "next/link";

type LanguageElementProps = {
  locale: string,
  lang: string,
  category: string
}

export default function LanguageElement({ locale, lang, category }: LanguageElementProps) {
  const selectedLocale = lang !== locale ? "font-extralight" : "font-extrabold"
  const increaseSpace = lang === 'de' ? 'pl-1/2' : ''
  const uppercaseLocale = locale.toUpperCase()

  return (
    <Link href={`/${locale}/${category}`}
      className={`items-center text-black relative ${selectedLocale} ${increaseSpace} `}>
      {uppercaseLocale}
    </Link>
  )
}
