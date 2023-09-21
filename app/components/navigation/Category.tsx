"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

type CategoryProps = {
  theme: string | null
}

const Category = ({ theme }: CategoryProps) => {
  const categories = ['men', 'women', 'kids']
  const currentTheme = theme === "dark" ? "content" : "bkg"
  const params = useSearchParams()
  const selected = params.get("category")

  return (
    <nav className="w-5/12 mx-auto pt-2">
      <ul className='grid grid-cols-3 w-full justify-items-center cursor-pointer'>
        {categories.map((category) => {
          return (
            <Link href={{
              pathname: usePathname(),
              query: {
                b: params.get("b"),
                theme: params.get("theme"),
                category: category
              }
            }}
              key={category}>
              <li
                className={`text-${selected === category ? `${currentTheme} font-bold` : 'faded'}`}>
                {category.toUpperCase()}
              </li>
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default Category
