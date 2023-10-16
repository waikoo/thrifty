"use client"
import { useDarkMode } from "../hooks"
import { IconAccount, IconFavorite, IconShoppingBag, Logo, SearchBar, WithHome } from './'

const NavBar = () => {
  useDarkMode()

  return (
    <section className="w-full max-w-[1440px] ">
      <div className={`grid grid-cols-3 pb-2 pt-4 w-full border-b-2 border-content relative mx-auto`}>
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
