import { Logo, SearchBar } from "."
import { IconAccount, IconFavorite, IconShoppingBag } from './'

const NavBar = () => {

  return (
    <div className={`grid grid-cols-3 pb-2 pt-4 border-b-2 border-content relative`}>
      <SearchBar />
      <Logo />
      <nav className="flex gap-6 justify-self-end items-center pt-2">
        <IconAccount />
        <IconFavorite />
        <IconShoppingBag />
      </nav>
    </div>
  )
}

export default NavBar
