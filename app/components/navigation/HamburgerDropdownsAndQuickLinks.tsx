import Link from "next/link";

import { Gender, Locales } from '@/types/link'
import HamburgerDropdownCategories from "@/app/components/navigation/HamburgerDropdownCategories";
import { albert, albert_900 } from "@/utils/fonts";

type HamburgerDropdownsAndQuickLinks = {
  lang: Locales
  gender: Gender
  selectedGender: Gender | ''
}

export default function HamburgerDropdownsAndQuickLinks({ lang, gender, selectedGender }: HamburgerDropdownsAndQuickLinks) {
  return (
    <div className={`bg-t_mustard p-6 pl-[2.8rem] grid grid-cols-1 grid-rows-6 gap-3 tracking-wide ${albert.className} *:text-[0.875rem] `}>

      <HamburgerDropdownCategories
        selectedGender={selectedGender}
        lang={lang}
        gender={gender}
      />

      <Link href={`${lang}/${gender}/products?gender=${gender}/&shop-by=new+in&sort-by=newfirst&page=1`}
        className={`${albert_900.className} block`}
      >
        NEW IN
      </Link>

      <Link href={`${lang}/${gender}/products?gender=${gender}/&shop-by=promos&sort-by=newfirst&page=1`}
        className={`${albert_900.className}`}
      >
        SALE
      </Link>

    </div>
  )
}

