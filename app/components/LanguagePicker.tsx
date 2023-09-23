import Link from 'next/link';
import React from 'react'
import { locales } from '../i18n/settings'

type LanguagePickerProps = {
  locale: string
}

const LanguagePicker = ({ locale: endpoint }: LanguagePickerProps) => {

  return (
    <ul className={`flex items-center gap-3 hover:cursor-pointer bg-grey col-start-1 col-end-2 absolute left-6 p-1 top-0`}>

      {locales.map((locale) => (
        <span key={locale} className={`${locale === 'en' ? 'separator' : ''}`}>
          <li className={
            `items-center text-content relative ${endpoint !== locale ? "font-extralight" : "font-extrabold"} ${endpoint === 'de' ? 'pl-1/2' : ''} `}>

            <Link href={{ pathname: `/${locale}` }} >
              {`${locale.toUpperCase()} `}
            </Link>

          </li>
        </span>
      ))}
    </ul >
  )
}

export default LanguagePicker 
