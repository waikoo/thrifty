"use client"
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState"
import { AccountMenu, CenterContainer, SignInOrUp } from "@/app/components/navigation"
import { IconAccount } from '@/app/components/navigation/icons/'
import useViewport from "../hooks/useViewport"
import { viewport } from "../data/universalStyles"
import Portal from "../generic/Portal"

export default function Account() {
  const { session, isAdmin, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn } = useUIStore()
  const viewportWidth = useViewport()

  return (
    <div className="relative">
      <div
        title={session?.user.role ? "Account" : "Sign In"}
        onClick={() => !session
          ? setShowSignIn(!showSignIn)
          : setShowMyAccount(!showMyAccount)}
      >
        <IconAccount />
      </div>

      {session && showMyAccount && <AccountMenu />}
      {!session && showSignIn && viewportWidth > viewport.sm && <CenterContainer />}
      {!session && showSignIn && viewportWidth < viewport.sm && (
        <Portal>
          <div className="w-screen h-screen ">
            <SignInOrUp />
          </div>
        </Portal>
      )}
    </div>
  )
}
