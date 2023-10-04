import { heroCarouselCircleColors as colors } from '../data'

type HeroCarouselCircleProps = {
  cx: number
  cy: number
  r: number
  isSelected: boolean
  onClick: () => void
}

const HeroCarouselCircle = ({ cx, cy, r, isSelected, onClick }: HeroCarouselCircleProps) => {

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
