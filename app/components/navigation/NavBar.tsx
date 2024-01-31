"use client"
import Link from "next/link"

import { useUIStore } from "@/state"
import { useDarkMode } from "@/app/components/hooks"
import { Logo, SearchBar, WithHome } from '@/app/components/navigation/'
import { IconAccount, IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import { usePathname } from "next/navigation"

type NavBarProps = {
  isAdmin?: boolean
  params?: { [key: string]: string | string[] | undefined }
}

const NavBar = ({ isAdmin, params }: NavBarProps) => {
  const lang = usePathname().split('/')[1]

  const htmlDataset = typeof document !== 'undefined' ? document.documentElement.dataset : undefined
  if (htmlDataset) {
    useDarkMode(htmlDataset)
  }

  const { setShowCategoryMenu } = useUIStore()

  return (
    <section className="w-full max-w-[1440px] ">
      <div className={`grid grid-cols-3 pb-2 pt-4 w-full border-b-2 border-content relative mx-auto`}
        onMouseEnter={() => setShowCategoryMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        <SearchBar />

        <WithHome> <Logo /> </WithHome>

        <nav className="flex items-center gap-6 justify-self-end pt-2">
          <IconAccount />
          <Link href={`/${lang}/favorites`}>
            <IconFavorite />
          </Link>
          <Link href={`/${lang}/cart`}>
            <IconShoppingBag hideCartNumber={true} />
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default NavBar
