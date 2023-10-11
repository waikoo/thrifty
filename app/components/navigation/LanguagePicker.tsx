import { LanguageElement } from ".";

export type LanguagePickerParams = {
  lang: string
  category: string
}

const LanguagePicker = ({ lang, category }: LanguagePickerParams) => {
  const locales = ['en', 'de'];
  console.log(category)
  return (
    <nav className={`flex items-center gap-3 bg-faded col-start-1 col-end-2 hover:cursor-pointer absolute left-6 p-1 top-0`}>

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

