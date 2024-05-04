"use client"
import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState"
import { IconAccount } from '@/app/components/navigation/icons/'
import useMouseLeave from "../hooks/useMouseLeave"

type AccountProps = {
  testid: 'mobile-account' | 'desktop-account'
}

export default function Account({ testid }: AccountProps) {
  const { session, isAdmin, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn, showRecovery } = useUIStore()
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

  const getTitle = (testid: 'mobile-account' | 'desktop-account') => {
    if (testid === 'mobile-account') {
      return ''
    }
    return session?.user.role ? "Account" : "Sign In"
  }

  return (
    <div className="relative">
      <div
        title={getTitle(testid)}
        onClick={() => !session
          ? setShowSignIn(!showSignIn)
          : setShowMyAccount(!showMyAccount)}
        onMouseOver={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        data-testid={testid}
      >
        <IconAccount />
      </div>
    </div>
  )
}
