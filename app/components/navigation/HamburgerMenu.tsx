"use client"
import { useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation"

import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerAccountBar from "@/app/components/navigation/HamburgerAccountBar";
import HamburgerGender from "@/app/components/navigation/HamburgerGender";
import getLangAndGender from "@/utils/getLangAndGender"
import HamburgerDropdownCategories from "./HamburgerDropdownCategories";
import { albert_900 } from "@/utils/fonts";
import { Gender } from "@/types/link";

export default function HamburgerMenu() {
  const [selectedGender, setSelectedGender] = useState<Gender | ''>('')
  const { setShowHamburgerMenu } = useNavigationStore()
  const bgRef = useRef(null)
  const { lang, gender } = getLangAndGender(usePathname())

  const handleCloseHamburgerMenu = (e: React.MouseEvent) => {
    if (e.target === bgRef.current) {
      setShowHamburgerMenu(false)
    }
  }

  return (
    <section className="absolute inset-0 z-[60] min-h-screen w-screen bg-[rgba(0,0,0,0.5)]"
      ref={bgRef}
      onClick={handleCloseHamburgerMenu}
    >
      <div className="w-[80%] ">

        <div className="bg-t_white dark:bg-t_black w-full p-4 ">
          <HamburgerAccountBar />

          <HamburgerGender
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            pathnameGender={gender}
          />
        </div>


        <div className="bg-t_mustard p-4 pl-[2.8rem] grid grid-cols-1 grid-rows-[auto_auto_auto] gap-3">

          <HamburgerDropdownCategories
            selectedGender={selectedGender}
            lang={lang}
            gender={gender}
          />

          <Link href={`${lang}/${gender}/products?gender=${gender}/&shop-by=new+in&sort-by=newfirst&page=1`}
            className={`${albert_900.className} text-[0.875rem] block`}
          >
            NEW IN
          </Link>

          <Link href={`${lang}/${gender}/products?gender=${gender}/&shop-by=promos&sort-by=newfirst&page=1`}
            className={`${albert_900.className} text-[0.875rem]`}
          >
            SALE
          </Link>

        </div>
      </div>
    </section>
  )
}

