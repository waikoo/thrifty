"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import getLangAndGender from "@/utils/getLangAndGender";

type LanguageElementProps = {
  locale: string,
}

export default function LanguageElement({ locale }: LanguageElementProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const selectedLocale = lang !== locale ? "text-t_grey font-medium" : "font-extrabold"
  const increaseSpace = lang === 'de' ? 'pl-1/2' : ''
  const uppercaseLocale = locale.toUpperCase()

  return (
    <Link href={`/${locale}/${gender}`}
      className={`items-center relative ${selectedLocale} ${increaseSpace} `}>
      {uppercaseLocale}
    </Link>
  )
}
