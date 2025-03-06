"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import getLangAndGender from "@/utils/getLangAndGender"
import FooterTitle from "@/app/components/footer/FooterTitle"
import { albert } from "@/utils/fonts"

type FooterShopProps = {
  textColor: string
  textSize: string
  tracking: string
}

export default function FooterShop({ textColor, textSize, tracking }: FooterShopProps) {
  const { lang } = getLangAndGender(usePathname())

  return (
    <div className={`footerText flex flex-col gap-7 text-[#f2f2f2] ${textSize}`}>
      <FooterTitle>SHOP</FooterTitle>

      <div className={`flex flex-col gap-2 ${textColor} ${tracking} ${albert.className}`}>
        <Link href={`/${lang}/men`}>Men</Link>
        <Link href={`/${lang}/women`}>Women</Link>
        <Link href={`/${lang}/kids`}>Kids</Link>
      </div>
    </div>
  )
}
