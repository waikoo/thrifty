import Link from "next/link"

import { Gender, Locales } from "@/types/link"
import { albert_500, albert_900 } from "@/utils/fonts"

type BrandsLetterProps = {
  children: string
  brandsArray: string[]
  lang: Locales
  gender: Gender
}

export default function BrandsLetter({ children, brandsArray, lang, gender }: BrandsLetterProps) {

  return (
    <section className="flex flex-col items-baseline gap-0">
      <div
        id={children}
        className={`text-[#e3e3e3] scroll-smooth text-[2.188rem] ${albert_900.className}`}
      >
        {children}
      </div>

      <div className="flex gap-6">
        {brandsArray.map((brand) => {
          const link = `/${lang}/${gender}/products?gender=${gender}&brand=${brand.toLowerCase()}&shop-by=new+in&sort-by=newfirst&page=1`

          return (
            <Link
              key={`${brand}`}
              href={link}
              className={`text-[#484848] cursor-pointer text-[1rem] ${albert_500.className}`}>
              {brand}
            </Link>
          )
        })}
      </div>
    </section>
  )
}
