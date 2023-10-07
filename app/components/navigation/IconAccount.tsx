"use client"
import React, { useEffect, useState } from 'react'
import { useThemeStore } from "@/state"
import { getSvgColor } from "@/utils/theme"
import { SignInOrUp } from '../'
import { AccountMenu } from '.'
import { supabase } from '@/app/supabase'
import { useUserSession } from '../hooks'

type IconAccountProps = {}

const IconAccount = ({ }: IconAccountProps) => {
  const [show, setShow] = useState(false)
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const session = useUserSession()

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={16}
        fill="none"
        className="cursor-pointer"
        onClick={() => setShow(prevState => !prevState)}
      >
        <path
          stroke={color}
          strokeWidth={2.5}
          d="M10.464 4.348c0 1.728-1.376 3.098-3.036 3.098-1.66 0-3.035-1.37-3.035-3.098 0-1.728 1.376-3.098 3.035-3.098 1.66 0 3.036 1.37 3.036 3.098ZM13.458 14.75H1.398c.608-2.501 3.029-4.457 6.03-4.457 3.002 0 5.423 1.956 6.03 4.457Z"
        />
      </svg>
      {show ? (
        session ? <AccountMenu /> : <SignInOrUp />
      ) : null}
    </>
  )
}

export default IconAccount
