"use client"
import React from "react"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"
import { twMerge as tm } from "tailwind-merge"

type IconSearchProps = {
  isHovered?: boolean
  isClicked?: boolean
  home?: boolean
  className?: string
}

const IconSearch = ({ isHovered, isClicked, className }: IconSearchProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const hoveredColor = useThemeStore((state) => getSvgColor(
    state.theme === 'dark' ? 'light' : 'dark'
  ))

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none"
      className={tm(`self-center ${className}`)}>
      <path
        stroke={isHovered && !isClicked ? hoveredColor : color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="m16 16-3.378-3.378m0 0a6.221 6.221 0 1 0-8.798-8.799 6.221 6.221 0 0 0 8.798 8.8Z"
      />
    </svg>
  )
}

export default IconSearch
