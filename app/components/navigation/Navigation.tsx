"use client"
import React from 'react'
import { IconAccount, IconFavorite, IconShoppingBag, Category, Logo, NavIcons, SearchBar } from './'
import ThemeProvider from '../hooks/ThemeProvider'

const Navigation = () => {
  return (
    <>
      <ThemeProvider>
        <nav>
          <div className={`grid grid-cols-3 pb-2 pt-4 border-b-2 border-black `}>
            <SearchBar />
            <Logo />
            <NavIcons>
              <IconAccount />
              <IconFavorite />
              <IconShoppingBag />
            </NavIcons>
          </div>
          <Category />
        </nav>
      </ThemeProvider>
    </>
  )
}

export default Navigation
