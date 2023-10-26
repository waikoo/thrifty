import Link from "next/link"
import { LanguagePicker } from "../navigation"

type FooterShopProps = {
}

export default function FooterShop({ }: FooterShopProps) {
  return (
    <div className="footerText flex flex-col gap-7">
      <h3 className="footerTitles">SHOP</h3>
      <div className="flex flex-col gap-2">
        <Link href="/en/men">Men</Link>
        <Link href="/en/women">Women</Link>
        <Link href="/en/kids">Kids</Link>
      </div>
      <LanguagePicker />
    </div>
  )
}
