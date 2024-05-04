"use client"
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState"
import { AccountMenu, CenterContainer, RecoverPassword, SignInOrUp } from "@/app/components/navigation"
import { IconAccount } from '@/app/components/navigation/icons/'
import useViewport from "../hooks/useViewport"
import { viewport } from "../data/universalStyles"
import Portal from "../generic/Portal"
import useMouseLeave from "../hooks/useMouseLeave"

export default function Account() {
  const { session, isAdmin, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn, showRecovery } = useUIStore()
  const viewportWidth = useViewport()
  const { handleMouseMove, getDirection, lastMousePosition } = useMouseLeave()

  const handleMouseEnter = () => {
    if (session) setShowMyAccount(true)
  }

  const handleMouseLeave = (e: React.MouseEvent) => {
    const direction = getDirection(lastMousePosition, { x: e.clientX, y: e.clientY });

    if (direction === 'up' || direction === 'right' || direction === 'left') {
      setShowMyAccount(false);
      return
    }
    setShowMyAccount(true);
  };

  return (
    <div className="relative">
      <div
        title={session?.user.role ? "Account" : "Sign In"}
        onClick={() => !session
          ? setShowSignIn(!showSignIn)
          : setShowMyAccount(!showMyAccount)}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        data-testid="desktop-account"
      >
        <IconAccount />
      </div>

      {session && showMyAccount && <AccountMenu />}

      {/* {!session && showSignIn && viewportWidth > viewport.sm && <CenterContainer />} */}
      {!session && showSignIn && viewportWidth > viewport.sm && <SignInOrUp />}

      {viewportWidth > viewport.sm && showRecovery && (
        <RecoverPassword />
      )}

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
    </div>
  )
}
