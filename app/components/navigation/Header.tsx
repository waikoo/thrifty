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
      <Banner />
      <section className="bg-bkg text-content mx-auto flex flex-col items-center px-20 lg:max-w-[1500px]">
        <NavBar />
        <Gender />
        {isAccountMenuBarItem && <AccountMenuBar />}

        <BackToTop />
      </section>
    </> : <SimpleHeader />
  )
}
