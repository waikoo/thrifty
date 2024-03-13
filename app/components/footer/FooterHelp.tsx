"use client"
import getLangAndGender from "@/utils/getLangAndGender";
import Link from "next/link";
import { usePathname } from "next/navigation";

type FooterHelpProps = {

}

export default function FooterHelp({ }: FooterHelpProps) {
  const { gender, lang } = getLangAndGender(usePathname())

  return (
    <div className="footerText flex flex-col gap-7">
      <h3 className="footerTitles">HELP</h3>
      <div className="flex flex-col gap-2 whitespace-nowrap">
        <Link href={`/${lang}/${gender}/help`}>About Us</Link>
        <Link href={`/${lang}/${gender}/help?section=1`}>Shipping & Delivery</Link>
        <Link href="/en/order-tracker">Order Tracker</Link>
        <Link href={`/${lang}/${gender}/returns`}>Returns</Link>
        <Link href={`/${lang}/${gender}/help?section=3`}>FAQ</Link>
      </div>
    </div>
  )
}
