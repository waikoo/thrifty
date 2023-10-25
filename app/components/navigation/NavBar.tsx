"use client"
import { useUIStore } from "@/state"
import { useDarkMode } from "../hooks"
import { IconAccount, IconFavorite, IconShoppingBag, Logo, SearchBar, WithHome } from './'

const NavBar = () => {
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
          <IconFavorite />
          <IconShoppingBag />
        </nav>
      </div>
    </section>
  )
}

export default NavBar
