import React from 'react'
import { useThemeStore } from '@/state'
import { heroCarouselCircleColors as colors } from '../data/'

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
        fill={isSelected ? colors.fill.selected[theme] : colors.fill.unselected[theme]}
        stroke={colors.stroke[theme]}
        className="cursor-pointer"
        style={{ pointerEvents: "none" }}
      />
    </>
  )
}

export default HeroCarouselCircle
