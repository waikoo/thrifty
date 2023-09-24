"use client"
import React from "react"
import { useThemeContext } from "../hooks/ThemeProvider"

type IconFavoriteProps = {
}

const IconFavorite = ({ }: IconFavoriteProps) => {
  const { theme } = useThemeContext()
  const color = theme !== "dark" ? "#191A1A" : "#fff"

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={16}
      fill="none"
      className="cursor-pointer"
    >
      <path
        stroke={color}
        strokeWidth={2.5}
        d="m16.667 7.488-6.745 6.744-6.744-6.744A3.654 3.654 0 1 1 8.345 2.32l.693.694.884.884.884-.884.694-.694a3.654 3.654 0 1 1 5.167 5.168Z"
      />
    </svg>
  )
}
export default IconFavorite
