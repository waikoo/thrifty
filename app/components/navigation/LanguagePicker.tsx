import { LanguageElement } from ".";

export type LanguagePickerParams = {
}

const LanguagePicker = () => {
  const locales = ['en', 'de'];

  return (
    <nav className={`flex items-center gap-3 bg-faded col-start-1 col-end-2 hover:cursor-pointer absolute left-6 p-1 top-0`}>

      {locales.map((locale: string) => {
        const className = `${locale === 'en' ? 'separator' : ''}`

        return (
          <span key={locale} className={className}>
            <LanguageElement {...{ locale }} />
            {/* <LanguageElement {...{ locale, lang, category }} /> */}
          </span>
        )
      })}
    </nav>
  );
}

export default LanguagePicker;

