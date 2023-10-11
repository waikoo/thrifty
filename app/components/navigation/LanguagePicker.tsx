import { LanguagePickerParams } from "@/types/nav";
import { LanguageElement } from ".";

const LanguagePicker = ({ params: { lang, category } }: LanguagePickerParams) => {
  const locales = ['en', 'de'];

  return (
    <nav className={`flex items-center gap-3 hover:cursor-pointer bg-faded col-start-1 col-end-2 absolute left-6 p-1 top-0`}>

      {locales.map((locale: string) => {
        const className = `${locale === 'en' ? 'separator' : ''}`

        return (
          <span key={locale} className={className}>
            <LanguageElement {...{ locale, lang, category }} />
          </span>
        )
      })}
    </nav>
  );
}

export default LanguagePicker;

