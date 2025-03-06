"use client"

import { albert, albert_800 } from "@/utils/fonts";
import { useState } from "react"

type FooterSmallDropdownProps = {
  theme: 'light' | 'dark'
  children: React.ReactNode
  title: 'ACCOUNT' | 'HELP'
}

export default function FooterSmallDropdown({ theme, children, title }: FooterSmallDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const iconColor = 'bg-t_mustard'
  const horizontalStyle = isDropdownOpen ? 'hidden' : ''
  const verticalStyle = isDropdownOpen ? 'rotate-90' : ''

  return (
    <>
      <div className={`grid grid-cols-2 w-[90%] items-center mx-auto mt-3`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className={`text-[15px] text-t_mustard ${albert_800.className}`}>{title}</span>
        <div className="justify-self-end relative" >
          <div className={`absolute ${iconColor} h-[2px] w-3 -left-[5px] transition-transform duration-500 ease-in-out ${horizontalStyle}`}></div>
          <div className={`absolute ${iconColor} h-3 w-[2px] -top-[5px] transition-transform duration-500 ease-in-out ${verticalStyle}`}></div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className={`bg-[#e3e3e3] dark:bg-[#1b1b1b]`}>
          <div className={`flex flex-col mx-auto w-[90%] gap-6 py-5 tracking-wider text-t_black dark:text-t_white ${albert.className}`}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

