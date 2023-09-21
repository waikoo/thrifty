import React from 'react'
import { IconAccount, IconFavorite, IconShoppingBag } from "./"

type NavIconsProps = {
  theme: string | null
}

const NavIcons = ({ theme }: NavIconsProps) => {

  return (
    <nav className="flex gap-6 justify-self-end items-end">
      <IconAccount theme={theme} />
      <IconFavorite theme={theme} />
      <IconShoppingBag theme={theme} />
    </nav>
  )
}

export default NavIcons
