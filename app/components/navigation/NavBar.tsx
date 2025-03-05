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
import IconSearch from "@/app/components/navigation/icons/IconSearch"
import { useNavigationStore } from "@/state/client/navigationState";
import HamburgerMenu from "@/app/components/navigation/HamburgerMenu"
import Portal from "@/app/components/generic/Portal"

type NavBarProps = {
  className: string
}

const NavBar = ({ className }: NavBarProps) => {
  const pathname = usePathname()
  const position = usePosition(pathname)
  const { setShowGenderMenu } = useGenderStore()
  const { theme } = useThemeStore()
  const borderColor = {
    light: 'xl:border-t_black',
    dark: 'xl:border-t_white',
  }
  const noBorderOnScroll = position === 'static' ? `${borderColor[theme]} xl:border-b-2` : ''
  const currentViewport = useViewport()
  const logoWidth = currentViewport < viewport['2xl'] ? '11.6875rem' : '8.1875rem'
  const isTablet = currentViewport >= viewport.sm && currentViewport < viewport.xl
  const { showMobileSearch, setShowMobileSearch, showHamburgerMenu, setShowHamburgerMenu } = useNavigationStore()
  const isTabletAndProductsEndpoint = isTablet && pathname.split('/')[3] === 'products'
  const finalPosition = isTabletAndProductsEndpoint ? 'static' : position
  const nonStaticHeaderAlignment = position !== 'static' ? 'items-end' : ''

  const handleShowSearch = (e: React.MouseEvent) => {
    setShowMobileSearch(true)
  }

  return (
    <nav className={`bg-t_white dark:bg-t_black ${finalPosition} top-0 z-50 w-screen ${className} overflow-hidden`}>
      <div className={`${noBorderOnScroll} relative grid w-screen grid-cols-[2rem_4rem_1fr_auto_auto] xl:grid-cols-3 pb-2 pt-4 mx-auto max-w-[90vw] 3xl:max-w-[1800px] ${nonStaticHeaderAlignment}`}
        onMouseEnter={() => setShowGenderMenu(false)} // makes categorymenu disappear when exiting with mouseover on top
      >
        <div className="w-5 h-5 mr-5 self-end col-start-1 col-end-2 row-start-1 xl:hidden"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}>
          <IconHamburger width="27px" />
        </div>

        {isTablet ? (
          <div className={`self-end sm:ml-4 col-start-2 col-end-3 xl:col-start-1 xl:col-end-2 row-start-1`}
            onClick={handleShowSearch}>
            <IconSearch />
          </div>
        ) : (
          <SearchBar className={`self-end sm:ml-4 col-start-2 col-end-3 xl:col-start-1 xl:col-end-2 row-start-1 xl:ml-0`} />
        )}

        {position === 'static' ? (
          <WithHome className="row-start-1 xl:col-start-2 xl:col-end-2"> <Logo className="self-end " width={logoWidth} /> </WithHome>
        ) : (
          <Gender isScrolled={true} />
        )}

        {/* on scroll Category shows up instead of Thriftstudio logo */}
        <NavIcons className="flex items-center gap-6 pt-2 self-end justify-self-end col-start-5 col-end-6 xl:col-start-3 xl:col-end-4 row-start-1" />
      </div>
    </nav>
  )
}

export default NavBar
