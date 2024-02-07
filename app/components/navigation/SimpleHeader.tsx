"use client"
import { Logo, WithHome } from '@/app/components/navigation/'
import NavIcons from "@/app/components/navigation/NavIcons"
import IconSearch from '@/app/components/navigation/icons/IconSearch'
import { useEffect, useRef, useState } from 'react'

export default function SimpleHeader() {
  const [showSearchBar, setShowSearchBar] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar)
  }

  useEffect(() => {
    if (showSearchBar) {
      inputRef.current?.focus()
    }

  }, [showSearchBar])

  return (
    <nav className="">
      <div className="mx-auto flex h-16 max-w-[85vw] items-center justify-between p-3">
        <WithHome> <Logo className="" /> </WithHome>

        <div className="flex w-[30vw] items-center gap-8">

          <section className={`text-bkg relative top-1 flex w-full items-center gap-2`}>
            {showSearchBar && (
              <input
                type="search"
                placeholder="Search"
                className={`text-content placeholda w-full appearance-none self-start border-b-[0.01rem] border-l-0 border-r-0 border-t-0 bg-transparent p-0 outline-0 ring-0 focus:outline-0 focus:ring-0`}
                style={{ WebkitAppearance: 'none' }}
                ref={inputRef}
              />)}

            <button className="ml-auto cursor-pointer"
              onClick={handleSearchClick}>
              <IconSearch className="" />
            </button>
          </section>

          <NavIcons className="" />
        </div>
      </div>
    </nav>
  )
}
