"use client"
import getLangAndGender from "@/utils/getLangAndGender"
import Link from "next/link"
import { usePathname } from "next/navigation"
import FooterTitle from "@/app/components/footer/FooterTitle"

type FooterShopProps = {
  textColor: string
  textSize: string
  tracking: string
}

export default function FooterShop({ textColor, textSize, tracking }: FooterShopProps) {
  const { gender, lang } = getLangAndGender(usePathname())

  return (
    <div className={`footerText flex flex-col gap-7 ${textSize}`}>
      <FooterTitle>SHOP</FooterTitle>

      <div className={`flex flex-col gap-2 ${textColor} ${tracking}`}>
        <Link href={`/${lang}/${gender}`}>Men</Link>
        <Link href={`/${lang}/${gender}`}>Women</Link>
        <Link href={`/${lang}/${gender}`}>Kids</Link>
      </div>
    </div>
  )
}
