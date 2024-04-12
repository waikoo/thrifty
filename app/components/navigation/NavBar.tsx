"use client"
import { useEffect, useState } from "react"

import { useUIStore } from "@/state/client/uiState"
import { useDarkMode } from "@/app/components/hooks"
import { Category, Logo, SearchBar, WithHome } from '@/app/components/navigation/'
import NavIcons from "@/app/components/navigation/NavIcons"
import { usePathname } from "next/navigation"

type NavBarProps = {
  params?: { [key: string]: string | string[] | undefined }
}

const NavBar = ({ params }: NavBarProps) => {

  const htmlDataset = typeof document !== 'undefined' ? document.documentElement.dataset : undefined
  if (htmlDataset) {
    useDarkMode(htmlDataset)
  }

  const { setShowCategoryMenu } = useUIStore()
  const [position, setPosition] = useState('static')
  const noBorderOnScroll = position === 'static' ? 'border-content border-b-2' : ''
  const pathname = usePathname()

  const handleScroll = () => {
    if (pathname.split('/').length < 4) { // is homepage
      console.warn('if case')
      setPosition(window.scrollY > 5 ? 'fixed' : 'static')
    } else {
      return
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={`bg-bkg ${position} top-0 z-50 w-screen`}>
      <div className={`${noBorderOnScroll} relative mx-auto grid w-full max-w-[1440px] grid-cols-3 pb-2 pt-4`}
        onMouseEnter={() => setShowCategoryMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        <SearchBar className="self-end" />

        {position === 'static' ?
          (
            <WithHome> <Logo className="self-end" /> </WithHome>
          ) : (
            <Category />
          )
        }
        {/* on scroll Category shows up instead of Thriftstudio logo */}
        <NavIcons className="self-end justify-self-end" />
      </div>
    </section>
  )
}

export default NavBar
