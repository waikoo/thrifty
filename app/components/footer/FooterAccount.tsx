"use client"
import getLangAndGender from "@/utils/getLangAndGender";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState";

export default function FooterAccount() {
  const { gender, lang } = getLangAndGender(usePathname())
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn } = useUIStore()
  const { session, error } = useUserSession()

  return (
    <div className="footerText flex flex-col gap-7">
      <h3 className="footerTitles">ACCOUNT</h3>
      <div className="flex flex-col gap-2">
        <span className="cursor-pointer"
          onClick={() => !session
            ? setShowSignIn(showSignIn ? false : true)
            : setShowMyAccount(showMyAccount ? false : true)}
        >Sign In/Up</span>

        <Link href={`/${lang}/${gender}/profile`}>My Profile</Link>
        <Link href={`/${lang}/${gender}/settings`}>Settings</Link>
      </div>
    </div>
  )
}
