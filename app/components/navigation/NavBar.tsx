"use client"
import { WithHome } from "../"
import { useDarkMode } from "../hooks"
import { IconAccount, IconFavorite, IconShoppingBag, Logo, SearchBar } from './'

const NavBar = () => {
  useDarkMode()

  return (
    <div className={`grid grid-cols-3 pb-2 pt-4 border-b-2 border-content relative`}>
      <SearchBar />
      <WithHome> <Logo /> </WithHome>

      <nav className="flex gap-6 justify-self-end items-center pt-2">
        <IconAccount />
        <IconFavorite />
        <IconShoppingBag />
      </nav>
    </div>
  )
}

export default NavBar
