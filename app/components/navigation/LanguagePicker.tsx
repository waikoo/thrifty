"use client"
import { usePathname } from "next/navigation";
import { LanguageElement } from ".";

export type LanguagePickerParams = {
}

const LanguagePicker = () => {
  const locales = ['en', 'de'];
  const [_, lang, category] = usePathname()

  return (
    <nav lang={lang}
      className={`flex items-center p-2 justify-center bg-bkg gap-3 bg-transparent hover:cursor-pointer py-1 z-50 relative justify-self-start text-content border-content border-[0.05rem]`}>

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

