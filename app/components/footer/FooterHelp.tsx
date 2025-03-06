"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import getLangAndGender from "@/utils/getLangAndGender";
import FooterTitle from "@/app/components/footer/FooterTitle";
import { albert_500 } from "@/utils/fonts";

type FooterHelpProps = {
  textColor: string
  textSize: string
  tracking: string
}

export default function FooterHelp({ textColor, textSize, tracking }: FooterHelpProps) {
  const { gender, lang } = getLangAndGender(usePathname())

  return (
    <div className={`footerText flex flex-col gap-7 text-[#f2f2f2] ${textSize}`}>
      <FooterTitle>HELP</FooterTitle>

      <div className={`flex flex-col gap-2 whitespace-nowrap ${textColor} ${tracking} ${albert_500.className}`}>
        <Link href={`/${lang}/${gender}/help`}>About Us</Link>
        <Link href={`/${lang}/${gender}/help?section=1`}>Shipping & Delivery</Link>
        <Link href={`/${lang}/${gender}/returns`}>Returns</Link>
        <Link href={`/${lang}/${gender}/help?section=3`}>FAQ</Link>
        <Link href={`/${lang}/${gender}/help?section=4`}>Contact</Link>
      </div>
    </div>
  )
}
