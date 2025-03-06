import Link from "next/link";

import { Gender, Locales } from '@/types/link'
import HamburgerDropdownCategories from "@/app/components/navigation/HamburgerDropdownCategories";
import { albert_500, albert_800 } from "@/utils/fonts";
import { useNavigationStore } from "@/state/client/navigationState";

type HamburgerDropdownsAndQuickLinks = {
  lang: Locales
  gender: Gender
  selectedGender: Gender | ''
}

export default function HamburgerDropdownsAndQuickLinks({ lang, gender, selectedGender }: HamburgerDropdownsAndQuickLinks) {
  const { setShowHamburgerMenu } = useNavigationStore()
  // NOTE: receiving setShowHamburgerMenu from parent HamburgerMenu gives a "setShowHamburgerMenu is not a function" error for a split second after clicking on it. Directly importing it does not.
  const hideHamburger = () => {
    setShowHamburgerMenu(false)
  }

  return (
    <div className={`bg-t_mustard p-6 pl-[2.8rem] grid grid-cols-1 grid-rows-6 gap-3 tracking-wide ${albert_500.className} *:text-[14px] sm:*:text-[1.125rem]`}>

      <HamburgerDropdownCategories
        selectedGender={selectedGender}
        lang={lang}
        gender={gender}
      />

      <Link href={`/${lang}/${gender}/products?gender=${gender}&shop-by=new+in&sort-by=newfirst&page=1`}
        className={`text-[15px] ${albert_800.className} block`}
        onClick={hideHamburger}
      >
        NEW IN
      </Link>

      <Link href={`/${lang}/${gender}/products?gender=${gender}&shop-by=promos&sort-by=newfirst&page=1`}
        className={`text-[15px] ${albert_800.className}`}
        onClick={hideHamburger}
      >
        SALE
      </Link>

    </div>
  )
}

