"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const LanguagePicker = () => {
  const params = new URLSearchParams(useSearchParams());
  console.log(params)
  return (
    <ul className='flex gap-2 hover:cursor-pointer bg-gray-500 col-start-1 col-end-2 content-center justify-center absolute top-4 left-3'>
      <Link href={{ pathname: '/en' }}>
        <li className="text-content">EN</li>
      </Link>

      <Link href={{ pathname: '/de' }}>
        <li className="text-content">DE</li>
      </Link>
    </ul>
  )
}

export default LanguagePicker 
