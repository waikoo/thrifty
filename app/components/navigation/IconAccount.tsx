"use client"
import React from 'react'
import { useThemeStore } from "../ThemeToggler"
import SignInOrUp from '../SignInOrUp'
import { useUIStore } from "../state/ui"

type IconAccountProps = {
  // children: React.ReactNode
}

const IconAccount = () => {
  const showSignIn = useUIStore((state) => state.showSignIn)
  console.log(showSignIn)
  const setShowSignIn = useUIStore((state) => state.setShowSignIn)
  const theme = useThemeStore((state) => state.theme)
  const color = theme !== "dark" ? "#191A1A" : "#fff"

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={16}
        fill="none"
        className="cursor-pointer"
        onClick={() => setShowSignIn(prevShowSignIn => !prevShowSignIn)}
      >
        <path
          stroke={color}
          strokeWidth={2.5}
          d="M10.464 4.348c0 1.728-1.376 3.098-3.036 3.098-1.66 0-3.035-1.37-3.035-3.098 0-1.728 1.376-3.098 3.035-3.098 1.66 0 3.036 1.37 3.036 3.098ZM13.458 14.75H1.398c.608-2.501 3.029-4.457 6.03-4.457 3.002 0 5.423 1.956 6.03 4.457Z"
        />
      </svg>
      {showSignIn ? <SignInOrUp /> : null}
    </>
  )
}

export default IconAccount
