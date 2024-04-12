"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import { useDarkMode } from "@/app/components/hooks"
import { Logo, SearchBar, WithHome } from '@/app/components/navigation/'
import NavIcons from "@/app/components/navigation/NavIcons"
import Gender from "@/app/components/navigation/Gender"
import { useGenderStore } from "@/state/client/genderState"

type NavBarProps = {
  params?: { [key: string]: string | string[] | undefined }
}

const NavBar = ({ params }: NavBarProps) => {

  const htmlDataset = typeof document !== 'undefined' ? document.documentElement.dataset : undefined
  if (htmlDataset) {
    useDarkMode(htmlDataset)
  }

  const { setShowGenderMenu } = useGenderStore()
  const [position, setPosition] = useState('static')
  const noBorderOnScroll = position === 'static' ? 'border-content border-b-2' : ''
  const pathname = usePathname()

  const handleScroll = () => {
    if (pathname.split('/').length < 4) { // is homepage
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
        onMouseEnter={() => setShowGenderMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        <SearchBar className="self-end" />

        {position === 'static' ?
          (
            <WithHome> <Logo className="self-end" /> </WithHome>
          ) : (
            <Gender />
          )
        }
        {/* on scroll Category shows up instead of Thriftstudio logo */}
        <NavIcons className="self-end justify-self-end" />
      </div>
    </section>
  )
}

export default NavBar
