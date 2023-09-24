"use client"
import React from "react"
import { useThemeContext } from "../hooks/ThemeProvider"

type IconSearchProps = {
}

const IconSearch = ({ }: IconSearchProps) => {
  const { theme } = useThemeContext()
  const color = theme !== "dark" ? "#191A1A" : "#fff"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" className="mt-2 self-center">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="m16 16-3.378-3.378m0 0a6.221 6.221 0 1 0-8.798-8.799 6.221 6.221 0 0 0 8.798 8.8Z"
      />
    </svg>
  )
}

export default IconSearch
