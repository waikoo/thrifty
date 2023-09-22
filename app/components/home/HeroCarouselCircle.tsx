import React from 'react'

type HeroCarouselCircleProps = {
  cx: number
  cy: number
  r: number
  isSelected: boolean
  onClick: () => void
}

const HeroCarouselCircle = ({ cx, cy, r, isSelected, onClick }: HeroCarouselCircleProps) => (
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
      fill={isSelected ? "#000" : "#fff"}
      stroke={isSelected ? "none" : "#000"}
      className="cursor-pointer"
      style={{ pointerEvents: "none" }}
    />
  </>
)

export default HeroCarouselCircle
