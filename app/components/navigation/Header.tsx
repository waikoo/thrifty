"use client"
import { usePathname, useRouter } from "next/navigation";

import { RxCross1 } from "react-icons/rx";

import { BackToTop, Banner, Logo, NavBar, WithHome } from "@/app/components/navigation";
import SimpleHeader from "@/app/components/navigation/SimpleHeader";
import AccountMenuBar from "@/app/components/navigation/AccountMenuBar";
import Gender from "@/app/components/navigation/Gender";
import MiniCart from "@/app/components/navigation/MiniCart";
import NavBarMobile from "@/app/components/navigation/NavBarMobile"
import { viewport } from "@/app/components/data/universalStyles";
import useViewport from "@/app/components/hooks/useViewport";

export default function Header() {
  const [pathname, router] = [usePathname(), useRouter()]
  const isCheckout = pathname.split('/')[2] === 'checkout'
  const isAccountMenuBarItem = ['profile', 'addresses', 'orders', 'returns', 'settings', 'help'].includes(pathname.split('/')[3])
  const viewportWidth = useViewport()
  const isHomePage = pathname.split('/').length < 4 && !isCheckout
  const isCartOrFavorites = pathname.includes('cart') || pathname.includes('favorites')
  const cartOrFavoritesStyle = isCartOrFavorites && viewportWidth < 640 ? 'bg-t_black' : 'dark:bg-t_black bg-t_white dark:text-t_white text-t_black '
  const logoColor = !isCartOrFavorites ? "black" : '#d2d62e';
  const crossVisibility = isCartOrFavorites ? 'block' : 'hidden';
  const hideBanner = isCartOrFavorites && viewportWidth < 640 ? 'hidden' : '';

  function onClickGoBack() {
    router.back()
  }

  return (
    !isCheckout ? <section className="relative overflow-hidden">
      <MiniCart />
      <header className={`${cartOrFavoritesStyle} flex flex-col items-center overflow-hidden relative`}>
        <Banner className={`${hideBanner}`} />
        <NavBar className="hidden sm:block" />
        <Gender className="hidden sm:block" />

        {!isHomePage && (
          <WithHome className="sm:hidden">
            <Logo logoColor={logoColor}
              width="7rem"
              className="py-4" />
          </WithHome>
        )}

        <div className="text-t_white absolute top-4 right-4" onClick={onClickGoBack}>
          <RxCross1 color="white" className={`${crossVisibility}`} />
        </div>

        {isAccountMenuBarItem && <AccountMenuBar />}

        {viewportWidth < viewport.sm && <NavBarMobile />}

        <BackToTop />

      </header>
    </section> : <SimpleHeader />
  )
}
