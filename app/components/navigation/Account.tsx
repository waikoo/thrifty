"use client"
import { useEffect, useRef } from "react"

import { useUserSession } from "@/app/components/hooks"
import { useUIStore } from "@/state"
import { AccountMenu, CenterContainer } from "@/app/components/navigation"
import { Error } from "@/app/components"
import { IconAccount } from '@/app/components/navigation/icons/'

export default function Account() {
  const { session, error } = useUserSession()
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn } = useUIStore()
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setShowMyAccount(false);
        setShowSignIn(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative" ref={divRef}>
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
