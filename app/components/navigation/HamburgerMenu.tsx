"use client"
import { useRef, useState } from "react";

import { usePathname } from "next/navigation"

import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerAccountBar from "@/app/components/navigation/HamburgerAccountBar";
import HamburgerGender from "@/app/components/navigation/HamburgerGender";
import getLangAndGender from "@/utils/getLangAndGender"
import { Gender } from "@/types/link";
import HamburgerAccountAndHelp from "@/app/components/navigation/HamburgerAccountAndHelp";
import HamburgerDropdownsAndQuickLinks from "./HamburgerDropdownsAndQuickLinks";

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

        <HamburgerDropdownsAndQuickLinks
          lang={lang}
          gender={gender}
          selectedGender={selectedGender}
        />

        <HamburgerAccountAndHelp lang={lang} gender={gender} />
      </div>
    </section>
  )
}

