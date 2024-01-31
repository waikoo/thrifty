"use client"
import { useEffect, useRef } from "react"

import { useThemeStore, useUIStore } from "@/state"
import { getSvgColor } from "@/utils/theme"
import { useUserSession } from "@/app/components/hooks"
import { AccountMenu, CenterContainer } from "@/app/components/navigation"
import { Error } from "@/app/components"

const IconAccount = () => {
  const { showMyAccount, setShowMyAccount, showSignIn, setShowSignIn } = useUIStore()
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const { session, error } = useUserSession()
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
      <div title={session?.user.role ? "Account" : "Sign In"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={15}
          height={16}
          fill={session ? color : "none"}
          className="cursor-pointer"
          onClick={() => !session
            ? setShowSignIn(showSignIn ? false : true)
            : setShowMyAccount(showMyAccount ? false : true)}
        >
          <path
            stroke={color}
            strokeWidth={2.5}
            d="M10.464 4.348c0 1.728-1.376 3.098-3.036 3.098-1.66 0-3.035-1.37-3.035-3.098 0-1.728 1.376-3.098 3.035-3.098 1.66 0 3.036 1.37 3.036 3.098ZM13.458 14.75H1.398c.608-2.501 3.029-4.457 6.03-4.457 3.002 0 5.423 1.956 6.03 4.457Z"
          />
        </svg>
      </div>

      {!error.status ? (
        showMyAccount ? <AccountMenu />
          : showSignIn ? <CenterContainer /> : null
      ) : <Error>Something went wrong</Error>}
    </div>
  )
}

export default IconAccount

