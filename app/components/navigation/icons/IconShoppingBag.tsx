"use client"
import React from "react"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconShoppingBagProps = {
  stroke?: string
}

const IconShoppingBag = ({ stroke }: IconShoppingBagProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      className="cursor-pointer"
    >
      <path
        stroke={stroke || color}
        strokeWidth={1.62}
        strokeMiterlimit={10}
        d="M1.96 6.277H1V16.96l16.062.04V6.237H16.1M5.9 6.297h6.666"
      />

      <path
        d="M5.47 9.346V4.602a3.674 3.674 0 011.1-2.571A3.622 3.622 0 019.156 1a3.601 3.601 0 012.584 1.03 3.653 3.653 0 011.1 2.57v4.745"
        stroke={stroke || color}
        strokeWidth={1.72}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
export default IconShoppingBag
