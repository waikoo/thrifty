import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconFavoriteProps = {
  stroke?: string
}

const IconFavorite = ({ stroke }: IconFavoriteProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <div
      className="relative cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={16}
        fill="none"
      >
        <path
          stroke={stroke || color}
          strokeWidth={2.5}
          d="m16.667 7.488-6.745 6.744-6.744-6.744A3.654 3.654 0 1 1 8.345 2.32l.693.694.884.884.884-.884.694-.694a3.654 3.654 0 1 1 5.167 5.168Z"
        />
      </svg>
    </div>
  )
}
export default IconFavorite
