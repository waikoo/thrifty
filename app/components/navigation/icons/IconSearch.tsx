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

  const finalColor = isHovered && !isClicked ? hoveredColor : color

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none"
      className={tm(`self-center ${className}`)}>
      <path
        stroke={finalColor}
        strokeWidth={2.5}
        d="M7.515 14.03a6.515 6.515 0 100-13.03 6.515 6.515 0 000 13.03z" />

      <path
        d="M15 13.5l3.136 2.753-.506.537L14.5 14l.5-.5z"
        fill={finalColor}
        stroke={finalColor}
        strokeMiterlimit={10}
      />

    </svg>
  )
}

export default IconSearch
