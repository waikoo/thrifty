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

type NavBarProps = {
  className: string
}

const NavBar = ({ className }: NavBarProps) => {
  const position = usePosition(usePathname())
  const { setShowGenderMenu } = useGenderStore()
  const noBorderOnScroll = position === 'static' ? 'border-t_black border-b-2' : ''
  const currentViewport = useViewport()
  const show = currentViewport < viewport.lg
  const logoWidth = currentViewport < viewport['2xl'] ? '11.6875rem' : '8.1875rem'

  return (
    <section className={`bg-t_white dark:bg-t_black ${position} top-0 z-50 w-screen ${className}`}>
      <div className={`${noBorderOnScroll} relative grid w-screen grid-cols-[auto_1fr_1fr_1fr] lg:grid-cols-3 pb-2 pt-4 mx-auto max-w-[90vw] xl:max-w-[1280px]`}
        onMouseEnter={() => setShowGenderMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        {show &&
          <div className="w-5 h-5 mr-5 self-end">
            <IconHamburger />
          </div>
        }

        <SearchBar className="self-end" />

        {position === 'static' ? (
          <WithHome> <Logo className="self-end" width={logoWidth} /> </WithHome>
        ) : (
          <Gender />
        )}

        {/* on scroll Category shows up instead of Thriftstudio logo */}
        <NavIcons className="flex items-center gap-6 pt-2 self-end justify-self-end" />
      </div>
    </section>
  )
}

export default NavBar
