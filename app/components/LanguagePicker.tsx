"use client";
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'
import { locales } from '../i18n/settings'

const LanguagePicker = () => {
  const params = new URLSearchParams(useSearchParams());
  const pathname = usePathname().slice(1)

  return (
    <ul className='flex gap-2 hover:cursor-pointer bg-gray-500 col-start-1 col-end-2 content-center justify-center absolute top-4 left-3 p-1.5'>
      {locales.map((locale, i) => (
        <Link key={locale} href={{
          pathname: `/${locale}`,
          query: {
            b: params.get("b"),
            theme: params.get("theme")
          }
        }}>
          <li className={
            `${pathname === locale ? "text-green-500 font-bold" : "text-content"}
              ${i === 0 ? "border-r-2 border-gray-400 pr-2" : ""}`}
          >{`${locale.toUpperCase()} `}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default LanguagePicker 
