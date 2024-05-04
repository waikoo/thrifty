"use client"
import { useUIStore } from "@/state/client/uiState"
import { viewport } from "../data/universalStyles"
import useViewport from "../hooks/useViewport"
import SignInOrUp from "./SignInOrUp"
import useUserSession from "../hooks/useUserSession"
import AccountMenu from "./AccountMenu"
import RecoverPassword from "./RecoverPassword"
import Portal from "../generic/Portal"
import RecoverPasswordConfirmation from "./RecoverPasswordConfirmation"
import SignUpConfirmation from "./SignUpConfirmation"


export default function Overlays() {
  const { session } = useUserSession()
  const { showMyAccount, showSignIn, showRecovery, showPasswordConfirmation, showSignUpConfirmation } = useUIStore()
  const viewportWidth = useViewport()

  return (
    <div>
      {!session && showSignIn && viewportWidth > viewport.sm && <SignInOrUp />}
      {session && showMyAccount && <AccountMenu />}
      {viewportWidth > viewport.sm && showRecovery && <RecoverPassword />}

      {!session && showRecovery && viewportWidth < viewport.sm && (
        <Portal>
          <div className="w-screen h-screen ">
            <RecoverPassword />
          </div>
        </Portal>
      )}

      {!session && showSignIn && viewportWidth < viewport.sm && (
        <Portal>
          <div className="w-screen h-screen ">
            <SignInOrUp />
          </div>
        </Portal>
      )}

      {showPasswordConfirmation && <RecoverPasswordConfirmation />}
      {showSignUpConfirmation && <SignUpConfirmation />}
    </div>
  )
}

