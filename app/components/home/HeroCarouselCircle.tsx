import React from 'react'
import { useThemeStore } from '../ThemeToggler'
import { fill, stroke } from '@/utils/theme'

type HeroCarouselCircleProps = {
  cx: number
  cy: number
  r: number
  isSelected: boolean
  onClick: () => void
}

const HeroCarouselCircle = ({ cx, cy, r, isSelected, onClick }: HeroCarouselCircleProps) => {
  const theme = useThemeStore((state) => state.theme as 'light' | 'dark')

  return (
    <>
      <circle
        cx={cx}
        cy={cy}
        r={r + 8}
        fill="transparent"
        stroke="none"
        onMouseDown={onClick}
        className="cursor-pointer"
        style={{ pointerEvents: "fill" }}
      />

      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={isSelected ? fill.selected[theme] : fill.unselected[theme]}
        stroke={stroke[theme]}
        className="cursor-pointer"
        style={{ pointerEvents: "none" }}
      />
    </>
  )
}

export default HeroCarouselCircle
