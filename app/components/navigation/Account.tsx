"use client"
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state"
import { AccountMenu, CenterContainer } from "@/app/components/navigation"
import { IconAccount } from '@/app/components/navigation/icons/'

export default function Account() {
  const { session, isAdmin, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn } = useUIStore()

  return (
    <div className="relative">
      <div
        title={session?.user.role ? "Account" : "Sign In"}
        onClick={() => !session
          ? setShowSignIn(showSignIn ? false : true)
          : setShowMyAccount(showMyAccount ? false : true)}
      >
        <IconAccount />
      </div>

      {session && showMyAccount && <AccountMenu />}
      {!session && showSignIn && <CenterContainer />}
    </div>
  )
}
