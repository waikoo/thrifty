import Link from "next/link";

export default function FooterAccount() {
  return (
    <div className="footerText flex flex-col gap-7">
      <h3 className="footerTitles">ACCOUNT</h3>
      <div className="flex flex-col gap-2">
        <Link href="/en/login">Sign In/Up</Link>
        <Link href="/en/register">My Profile</Link>
        <Link href="/en/settings">Settings</Link>
      </div>
    </div>
  )
}
