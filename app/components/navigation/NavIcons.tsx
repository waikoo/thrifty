import React from 'react'

type NavIconsProps = {
  // theme: string | null
  children: React.ReactNode
}

const NavIcons = ({ children }: NavIconsProps) => {

  return (
    <nav className="flex gap-6 justify-self-end items-center pt-2">
      {children}
    </nav>
  )
}

export default NavIcons
