import { LanguagePickerParams } from "@/types/nav";
import Link from "next/link";

const LanguagePicker = ({ params: { lang, category } }: LanguagePickerParams) => {
  const locales = ['en', 'de'];

  return (
    <nav className={`flex items-center gap-3 hover:cursor-pointer bg-faded col-start-1 col-end-2 absolute left-6 p-1 top-0`}>

      {locales.map((locale: string) => (
        <span
          key={locale}
          className={`${locale === 'en' ? 'separator' : ''}`}>

          {/* <Link */}
          {/* href={{ pathname: `/${locale}/${category}` }} */}

          <Link href={`/${locale}/${category}`}
            className={`items-center text-black relative 
              ${lang !== locale ? "font-extralight" : "font-extrabold"} 
              ${lang === 'de' ? 'pl-1/2' : ''} `}>
            {`${locale.toUpperCase()} `}
          </Link>

        </span>
      ))}
    </nav>
  );
}

export default LanguagePicker;

