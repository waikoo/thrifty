"use client"

import { albert, albert_800 } from "@/utils/fonts";
import { useState } from "react"

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

type FooterSmallDropdownProps = {
  theme: 'light' | 'dark'
  children: React.ReactNode
  title: 'ACCOUNT' | 'HELP'
}

export default function FooterSmallDropdown({ theme, children, title }: FooterSmallDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const iconColor = theme === 'light' ? 'black' : 'yellow'

  return (
    <>
      <div className={`grid grid-cols-2 w-[90%] mx-auto mt-3`}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <span className={` ${albert_800.className}`}>{title}</span>
        <div className="justify-self-end" >
          {!isDropdownOpen ? <FaPlus color={iconColor} /> : <FaMinus color={iconColor} />}
        </div>
      </div>

      {isDropdownOpen && (
        <div className={`bg-[#e3e3e3] dark:bg-[#1b1b1b]`}>
          <div className={`flex flex-col mx-auto w-[90%] gap-6 py-5 tracking-wider ${albert.className}`}>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

