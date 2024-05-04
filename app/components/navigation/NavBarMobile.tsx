"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useThemeStore } from "@/state/themeState";
import { IconSearch } from '@/app/components/navigation/icons';
import IconHamburger from "@/app/components/navigation/icons/IconHamburger";
import Account from "@/app/components/navigation/Account";
import getLangAndGender from "@/utils/getLangAndGender";
import IconFavorite from "@/app/components/navigation/icons/IconFavorite";
import IconShoppingBag from "@/app/components/navigation/icons/IconShoppingBag";
import { useNavigationStore } from "@/state/client/navigationState";
import Portal from "@/app/components/generic/Portal";
import MobileSearch from "@/app/components/navigation/MobileSearch";

export default function NavBarMobile() {
  const { theme } = useThemeStore()
  const bgColor = theme === 'dark' ? 'bg-t_black/40' : 'bg-t_white/40'
  const { lang, gender } = getLangAndGender(usePathname())
  const { showMobileSearch, setShowMobileSearch, showHamburgerMenu, setShowHamburgerMenu } = useNavigationStore()

  const handleSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setShowMobileSearch(!showMobileSearch)
  }

  return (
    <section
      className={`sm:hidden fixed bottom-[0.3125rem] max-w-[90vw] ${bgColor} rounded-full mt-3 left-0 right-0 mx-auto`}
    >
      <div className="grid grid-cols-5 justify-items-center gap-[3.3rem] z-50 backdrop-blur-md bg-opacity-40 drop-shadow-md px-6 py-2 items-center rounded-full">

        <div onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          data-testid="hamburger-icon">
          <IconHamburger />
        </div>

        <div className="" onClick={handleSearch}>
          <IconSearch className="self-end" />
        </div>

        <Account testid="mobile-account" />

        <Link href={`/${lang}/${gender}/favorites`} className="relative" title="Favorites">
          <IconFavorite />
        </Link>

        <Link href={`/${lang}/${gender}/cart`}
          className="relative"
        >
          <IconShoppingBag />
        </Link>

        {showMobileSearch && (
          <Portal>
            <MobileSearch />
          </Portal>
        )}
      </div>
    </section>
  )
}

