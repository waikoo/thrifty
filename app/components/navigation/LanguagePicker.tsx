"use client"
import { usePathname } from "next/navigation";

import { twMerge as tm } from 'tailwind-merge'

import { LanguageElement } from "@/app/components/navigation";

export type LanguagePickerParams = {
  isTop?: boolean
}

const LanguagePicker = ({ isTop }: LanguagePickerParams) => {
  const locales = ['en', 'de'];

  const [_, lang, category] = usePathname()
  const border = isTop ? 'border-t_black' : 'border-[0.1rem]'
  const color = isTop ? 'dark:text-t_black' : 'text:t_white'

  return (
    <nav lang={lang}
      className={tm(`flex items-center px-0 justify-center gap-3 bg-transparent hover:cursor-pointer py-1 z-50 relative justify-self-start dark:text-t_dark text-t_white ${border} ${color}`)}>

      {locales.map((locale: string) => {
        const className = `${locale === 'en' ? 'separator' : ''}`

        return (
          <span key={locale} className={className}>
            <LanguageElement {...{ locale }} />
          </span>
        )
      })}
    </nav>
  );
}

export default LanguagePicker;

