import React, { Suspense } from 'react'
import { IconAccount, IconFavorite, IconShoppingBag, Category, Logo, NavIcons, SearchBar } from './'

const Navigation = () => {
  return (
    <>
      <nav>
        <div className={`grid grid-cols-3 pb-2 pt-4 border-b-2 border-content`}>
          <SearchBar />
          <Logo />
          <NavIcons>
            <IconAccount />
            <IconFavorite />
            <IconShoppingBag />
          </NavIcons>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <Category />
        </Suspense>

      </nav>
    </>
  )
}

export default Navigation
