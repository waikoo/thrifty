import Link from "next/link";

export default function FooterAccount() {
  return (
    <div className="flex flex-col">
      <h3 className="footerTitles">ACCOUNT</h3>
      <Link href="/en/login">Sign In/Up</Link>
      <Link href="/en/register">My Profile</Link>
      <Link href="/en/settings">Settings</Link>
    </div>
  )
}
