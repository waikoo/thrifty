"use client"
import { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation"

import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerAccountBar from "@/app/components/navigation/HamburgerAccountBar";
import HamburgerGender from "@/app/components/navigation/HamburgerGender";
import getLangAndGender from "@/utils/getLangAndGender"
import { Gender } from "@/types/link";
import HamburgerAccountAndHelp from "@/app/components/navigation/HamburgerAccountAndHelp";
import HamburgerDropdownsAndQuickLinks from "./HamburgerDropdownsAndQuickLinks";
import HamburgerLanguageAndTheme from "./HamburgerLanguageAndTheme";
import Portal from "../generic/Portal";

export default function HamburgerMenu() {
  const [selectedGender, setSelectedGender] = useState<Gender | ''>('')
  const { showHamburgerMenu, setShowHamburgerMenu } = useNavigationStore()
  const bgRef = useRef(null)
  const { lang, gender } = getLangAndGender(usePathname())

  useEffect(() => {
    if (showHamburgerMenu) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showHamburgerMenu])

  const handleCloseHamburgerMenu = (e: React.MouseEvent) => {
    if (e.target === bgRef.current) {
      setShowHamburgerMenu(false)
    }
  }

  return showHamburgerMenu && <Portal>
    <section className="absolute inset-0 z-[60] h-screen w-screen bg-[rgba(0,0,0,0.5)]"
      ref={bgRef}
      onClick={handleCloseHamburgerMenu}
      data-testid="hamburger-menu"
    >
      <div className="w-[80%] sm:max-w-[26.0625rem] text-t_black dark:text-t_black h-screen overflow-y-scroll">

        <div className="bg-t_white dark:bg-t_black w-full p-4 pb-0">
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

        <HamburgerLanguageAndTheme lang={lang} gender={gender} />
      </div>
    </section>
  </Portal>
}

