"use client"
import { useUIStore } from "@/state";
import { usePathname } from "next/navigation";
import { LanguageElement } from ".";

export type LanguagePickerParams = {
}

const LanguagePicker = () => {
  const locales = ['en', 'de'];
  const [_, lang, category] = usePathname()
  const { showBanner } = useUIStore()
  const textColor = showBanner ? 'text-black' : 'text-content'
  const top = showBanner ? 'top-0' : 'top-5'

  return (
    <nav lang={lang} className={`flex items-center bg-bkg gap-3 bg-transparent col-start-1 col-end-2 hover:cursor-pointer absolute left-2 p-1 z-50
      ${top} ${textColor}`}>

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

