"use client"
import { usePathname, useRouter } from "next/navigation"

import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state/client/uiState"
import { IconAccount } from '@/app/components/navigation/icons/'
import useMouseLeave from "@/app/components/hooks/useMouseLeave"
import getLangAndGender from "@/utils/getLangAndGender"
import { viewport } from "../data/universalStyles"
import useViewport from "../hooks/useViewport"

type AccountProps = {
  testid: 'mobile-account' | 'desktop-account'
}

export default function Account({ testid }: AccountProps) {
  const { session, isAdmin, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn, showRecovery } = useUIStore()
  const { handleMouseMove, getDirection, lastMousePosition } = useMouseLeave()
  const [pathname, router] = [usePathname(), useRouter()]
  const { lang, gender } = getLangAndGender(pathname)
  const currentViewport = useViewport()

  const handleClick = () => {
    if (session) {
      router.push(`/${lang}/${gender}/profile`)
    } else {
      setShowSignIn(true)
    }
  }

  const handleMouseEnter = () => {
    if (currentViewport < viewport.xl) return
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
        onClick={handleClick}
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
