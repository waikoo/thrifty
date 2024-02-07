"use client"
import { BackToTop, Banner, Category, NavBar } from "@/app/components/navigation";
import { usePathname } from "next/navigation";
import SimpleHeader from "./SimpleHeader";

export default function Header() {
  const pathname = usePathname()
  const isCheckout = pathname.split('/')[2] === 'checkout'

  return (
    !isCheckout ? <>
      <Banner />
      <section className="bg-bkg text-content mx-auto flex flex-col items-center px-20 lg:max-w-[1500px]">
        <NavBar />
        <Category />

        <BackToTop />
      </section>
    </> : <SimpleHeader />
  )
}
