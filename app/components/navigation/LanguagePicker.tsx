"use client"
import { usePathname } from "next/navigation";
import { LanguageElement } from ".";
import { twMerge as tm } from 'tailwind-merge'
import { useThemeStore } from "@/state";
import { getSvgColor } from "@/utils/theme";

export type LanguagePickerParams = {
  isTop?: boolean
}

const LanguagePicker = ({ isTop }: LanguagePickerParams) => {
  const locales = ['en', 'de'];
  const [_, lang, category] = usePathname()
  const border = isTop ? '' : 'border-content border-[0.1rem]'
  const themeColor = useThemeStore((state) => getSvgColor(state.theme))
  const color = isTop ? 'text-black' : themeColor

  return (
    <nav lang={lang}
      className={tm(`flex items-center p-2 justify-center bg-bkg gap-3 bg-transparent hover:cursor-pointer py-1 z-50 relative justify-self-start text-content ${border} ${color}`)}>

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

