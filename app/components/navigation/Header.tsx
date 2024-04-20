"use client"
import { usePathname } from "next/navigation";

import { BackToTop, Banner, NavBar } from "@/app/components/navigation";
import SimpleHeader from "@/app/components/navigation/SimpleHeader";
import AccountMenuBar from "@/app/components/navigation/AccountMenuBar";
import Gender from "@/app/components/navigation/Gender";

export default function Header() {
  const pathname = usePathname()
  const isCheckout = pathname.split('/')[2] === 'checkout'
  const isAccountMenuBarItem = ['profile', 'addresses', 'orders', 'returns', 'settings', 'help'].includes(pathname.split('/')[3])

  return (
    !isCheckout ? <>
      <section className="dark:bg-t_black bg-t_white text-content flex flex-col items-center overflow-x-hidden">
        <Banner />
        <NavBar className="hidden sm:block" />
        <Gender />

        {isAccountMenuBarItem && <AccountMenuBar />}

        <BackToTop />
      </section>
    </> : <SimpleHeader />
  )
}
