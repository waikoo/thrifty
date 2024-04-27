"use client"
import { usePathname } from "next/navigation"

import { Logo, SearchBar, WithHome } from '@/app/components/navigation/'
import NavIcons from "@/app/components/navigation/NavIcons"
import Gender from "@/app/components/navigation/Gender"
import { useGenderStore } from "@/state/client/genderState"
import useViewport from "@/app/components/hooks/useViewport"
import IconHamburger from "@/app/components/navigation/icons/IconHamburger"
import { viewport } from "@/app/components/data/universalStyles"
import usePosition from "@/app/components/hooks/usePosition"
import { useThemeStore } from "@/state/themeState"

type NavBarProps = {
  className: string
}

const NavBar = ({ className }: NavBarProps) => {
  const position = usePosition(usePathname())
  const { setShowGenderMenu } = useGenderStore()
  const { theme } = useThemeStore()
  const borderColor = {
    light: 'xl:border-t_black',
    dark: 'xl:border-t_white',
  }
  const noBorderOnScroll = position === 'static' ? `${borderColor[theme]} xl:border-b-2` : ''
  const currentViewport = useViewport()
  const show = currentViewport < viewport.lg
  const logoWidth = currentViewport < viewport['2xl'] ? '11.6875rem' : '8.1875rem'

  return (
    <section className={`bg-t_white dark:bg-t_black ${position} top-0 z-50 w-screen ${className}`}>
      <div className={`${noBorderOnScroll} relative grid w-screen grid-cols-[2rem_4rem_1fr_auto_auto] lg:grid-cols-3 pb-2 pt-4 mx-auto max-w-[90vw] 3xl:max-w-[1800px]`}
        onMouseEnter={() => setShowGenderMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        {show &&
          <div className="w-5 h-5 mr-5 self-end col-start-1 col-end-2">
            <IconHamburger />
          </div>
        }

        <SearchBar className="self-end ml-4 col-start-2 col-end-3 lg:col-start-1 lg:col-end-2" />

        {position === 'static' ? (
          <WithHome> <Logo className="self-end " width={logoWidth} /> </WithHome>
        ) : (
          <Gender />
        )}

        {/* on scroll Category shows up instead of Thriftstudio logo */}
        <NavIcons className="flex items-center gap-6 pt-2 self-end justify-self-end col-start-5 col-end-6 lg:col-start-3 lg:col-end-4" />
      </div>
    </section>
  )
}

export default NavBar
