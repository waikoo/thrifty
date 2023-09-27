import React from 'react'
import { IconAccount, IconFavorite, IconShoppingBag } from './'

type NavIconsProps = {
  // children: React.ReactNode
}

const NavIcons = ({ }: NavIconsProps) => {

  return (
    <nav className="flex gap-6 justify-self-end items-center pt-2">
      <IconAccount />
      {/* </IconAccount> */}
      <IconFavorite />
      <IconShoppingBag />

    </nav>
  )
}

export default NavIcons
