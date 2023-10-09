"use client"
import { locales } from '@/app/i18n/settings';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type LanguagePickerProps = {
}

const LanguagePicker = ({ }: LanguagePickerProps) => {
  const params = useSearchParams()
  const pathname = usePathname().slice(1)

  return (
    <ul className={`flex items-center gap-3 hover:cursor-pointer bg-faded col-start-1 col-end-2 absolute left-6 p-1 top-0`}>

      {locales.map((locale) => (
        <span key={locale} className={`${locale === 'en' ? 'separator' : ''}`}>
          <li className={
            `items-center text-black relative ${pathname !== locale ? "font-extralight" : "font-extrabold"} ${pathname === 'de' ? 'pl-1/2' : ''} `}>

            <Link href={{
              pathname: `/${locale}`,
              query: {
                category: params.get('category')
              }
            }} >
              {`${locale.toUpperCase()} `}
            </Link>

          </li>
        </span>
      ))}
    </ul >
  )
}

export default LanguagePicker 
