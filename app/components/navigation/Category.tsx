"use client"
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

type CategoryProps = {
}

const Category = ({ }: CategoryProps) => {
  const categories = ['men', 'women', 'kids']
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
                category: category
              }
            }}
              key={category}>
              <li
                className={`text-${selected === category ? `content font-extrabold` : 'faded'}`}>
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
