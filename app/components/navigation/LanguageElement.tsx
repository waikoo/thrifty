"use client"
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";

type LanguageElementProps = {
  locale: string,
}

export default function LanguageElement({ locale }: LanguageElementProps) {
  const [, lang, category] = usePathname().split('/')
  const selectedLocale = lang !== locale ? "text-t_grey font-medium" : "font-extrabold"
  const increaseSpace = lang === 'de' ? 'pl-1/2' : ''
  const uppercaseLocale = locale.toUpperCase()

  return (
    <Link href={`/${locale}/${category}`}
      className={`items-center relative ${selectedLocale} ${increaseSpace} `}>
      {uppercaseLocale}
    </Link>
  )
}
