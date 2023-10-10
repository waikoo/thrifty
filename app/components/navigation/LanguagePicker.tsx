"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LanguagePicker = () => {
  const pathname = usePathname().split('/')[1]
  const locales = ['en', 'de']

  return (
    <nav className={`flex items-center gap-3 hover:cursor-pointer bg-faded col-start-1 col-end-2 absolute left-6 p-1 top-0`}>

      {locales.map((locale: string) => (
        <span key={locale} className={`${locale === 'en' ? 'separator' : ''}`}>

          <Link
            href={{
              pathname: `/${locale}`,
            }}
            className={`items-center text-black relative 
              ${pathname !== locale ? "font-extralight" : "font-extrabold"} 
              ${pathname === 'de' ? 'pl-1/2' : ''} `}>
            {`${locale.toUpperCase()} `}
          </Link>

        </span>
      ))
      }
    </nav >
  )
}

export default LanguagePicker 
