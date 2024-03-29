"use client"
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state"
import { AccountMenu, CenterContainer } from "@/app/components/navigation"
import { Error } from "@/app/components"
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

      {!error.status ? (
        showMyAccount ? <AccountMenu />
          : showSignIn ? <CenterContainer /> : null
      ) : <Error>Something went wrong</Error>}
    </div>
  )
}
