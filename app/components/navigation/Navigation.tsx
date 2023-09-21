"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { Category, Logo, NavIcons, SearchBar } from './'

const Navigation = () => {
  const params = useSearchParams()
  const theme = params.get("theme")

  return (
    <>
      <nav className={`grid grid-cols-3 border-b-2 pb-2 pt-4 
        ${params.get("b") === "false" || !params.get("b") ? "pt-14" : "pt-4"}`}>

        <SearchBar theme={theme} />
        <Logo theme={theme} />
        <NavIcons theme={theme} />
      </nav>
      <Category theme={theme} />
    </>
  )
}

export default Navigation
