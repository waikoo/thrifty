import Link from "next/link";

type FooterHelpProps = {

}

export default function FooterHelp({ }: FooterHelpProps) {
  return (
    <div className="footerText flex flex-col gap-7">
      <h3 className="footerTitles">HELP</h3>
      <div className="flex flex-col gap-2 whitespace-nowrap">
        <Link href="/en/about">About Us</Link>
        <Link href="/en/shipping">Shipping & Delivery</Link>
        <Link href="/en/order-tracker">Order Tracker</Link>
        <Link href="/en/returns">Returns</Link>
        <Link href="/en/help">FAQ</Link>
      </div>
    </div>
  )
}
