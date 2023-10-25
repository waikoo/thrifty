import Link from "next/link"
import { LanguagePicker } from "../navigation"

type FooterShopProps = {
}

export default function FooterShop({ }: FooterShopProps) {
  return (
    <div className="flex flex-col">
      <h3 className="footerTitles">SHOP</h3>
      <Link href="/en/men">Men</Link>
      <Link href="/en/women">Women</Link>
      <Link href="/en/kids">Kids</Link>
      <LanguagePicker />
    </div>
  )
}
