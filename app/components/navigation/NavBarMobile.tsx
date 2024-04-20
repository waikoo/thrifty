"use client"
import { useThemeStore } from "@/state/themeState";
import SearchBar from "./SearchBar";
import IconHamburger from "./icons/IconHamburger";
import Account from "./Account";
import Link from "next/link";
import getLangAndGender from "@/utils/getLangAndGender";
import { usePathname } from "next/navigation";
import IconFavorite from "./icons/IconFavorite";
import IconShoppingBag from "./icons/IconShoppingBag";

export default function NavBarMobile() {
  const { theme } = useThemeStore()
  const bgColor = theme === 'dark' ? 'bg-t_black/40' : 'bg-t_white/40'
  const { lang, gender } = getLangAndGender(usePathname())

  return (
    <section
      className={`fixed bottom-[0.3125rem] max-w-[90vw] ${bgColor} rounded-full px-6 py-2 items-center drop-shadow-md mt-3 grid grid-cols-5 justify-items-center gap-[3.3rem] z-50 backdrop-blur-md bg-opacity-40`}

    >
      <IconHamburger />
      <SearchBar className="" />
      <Account />

      <Link href={`/${lang}/${gender}/favorites`} className="relative" title="Favorites">
        <IconFavorite />
      </Link>

      <Link href={`/${lang}/${gender}/cart`}
        className="relative"
      >
        <IconShoppingBag />
      </Link>
    </section>
  )
}

