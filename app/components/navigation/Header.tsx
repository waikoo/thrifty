"use client"
import { usePathname } from "next/navigation";

import { BackToTop, Banner, Logo, NavBar, WithHome } from "@/app/components/navigation";
import SimpleHeader from "@/app/components/navigation/SimpleHeader";
import AccountMenuBar from "@/app/components/navigation/AccountMenuBar";
import Gender from "@/app/components/navigation/Gender";
import MiniCart from "@/app/components/navigation/MiniCart";
import NavBarMobile from "@/app/components/navigation/NavBarMobile"
import { viewport } from "@/app/components/data/universalStyles";
import useViewport from "@/app/components/hooks/useViewport";

export default function Header() {
  const pathname = usePathname()
  const isCheckout = pathname.split('/')[2] === 'checkout'
  const isAccountMenuBarItem = ['profile', 'addresses', 'orders', 'returns', 'settings', 'help'].includes(pathname.split('/')[3])
  const viewportWidth = useViewport()
  const isHomePage = pathname.split('/').length < 4 && !isCheckout

  return (
    !isCheckout ? <section className="relative overflow-hidden">
      <MiniCart />
      <header className="dark:bg-t_black bg-t_white dark:text-t_white text-t_black flex flex-col items-center overflow-hidden">
        <Banner />
        <NavBar className="hidden sm:block" />
        <Gender className="hidden sm:block" />

        {!isHomePage && (
          <WithHome className="sm:hidden">
            <Logo logoColor="black" width="7rem" className="py-4" />
          </WithHome>
        )}

        {isAccountMenuBarItem && <AccountMenuBar />}

        {viewportWidth < viewport.sm && <NavBarMobile />}

        <BackToTop />

      </header>
    </section> : <SimpleHeader />
  )
}
