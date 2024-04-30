"use client"
import { twMerge as tm } from "tailwind-merge"

import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconSearchProps = {
  isHovered?: boolean
  isClicked?: boolean
  home?: boolean
  className?: string
  width?: string
}

const IconSearch = ({ isHovered, isClicked, className, width }: IconSearchProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const hoveredColor = useThemeStore((state) => getSvgColor(
    state.theme === 'dark' ? 'light' : 'dark'
  ))

  const finalColor = isHovered && !isClicked ? hoveredColor : color

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 19}
      height={width ? '100%' : 19}
      fill="none"
      className={tm(`self-center ${className}`)}>
      <path
        stroke={finalColor}
        strokeWidth={2}
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
