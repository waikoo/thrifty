import Link from "next/link";

import { albert_900 } from "@/utils/fonts";
import ThemeToggler from "@/app/components/generic/ThemeToggler";
import { Gender, Locales } from "@/types/link";

type HamburgerLanguageAndThemeProps = {
  lang: Locales
  gender: Gender
}

export default function HamburgerLanguageAndTheme({ lang, gender }: HamburgerLanguageAndThemeProps) {
  const languages = ['en', 'de']

  return (
    <div className="bg-t_mustard p-4 px-5 grid gap-6">
      <div className="grid grid-cols-2 items-center">
        <span className={`${albert_900.className} text-[0.75rem]`}>LANGUAGE</span>
        <div className="justify-self-end flex items-center gap-2">
          {languages.map((language) => {
            const style = language === lang ? `${albert_900.className} bg-t_white text-t_black p-1 px-2` : 'text-t_black'

            return (
              <Link
                href={`/${language}/${gender}`}
                className={style}
                key={`hamb-lang-${language}`}
              >
                {language.toUpperCase()}
              </Link>
            )
          })}

        </div>
      </div>

      <div className="grid grid-cols-2 items-center">
        <span className={`${albert_900.className} text-[0.75rem]`}>THEME</span>
        <ThemeToggler />
      </div>

    </div>
  )
}

