import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconFavoriteProps = {
  stroke?: string
  width?: string
  fill?: boolean
}

const IconFavorite = ({ stroke, width, fill }: IconFavoriteProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const filledIcon = fill ? 'black' : 'none'

  return (
    <div
      className="relative cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 19}
        height={width ? '100%' : 18}
        viewBox="0 0 22 19"
        fill={filledIcon}
      >
        <path
          stroke={stroke || color}
          strokeWidth={2}
          d="M10.568 17L2.183 8.604a4.546 4.546 0 016.42-6.421l.872.86 1.104 1.103 1.103-1.103.86-.86a4.546 4.546 0 016.422 6.42L10.568 17z"
        />
      </svg>
    </div>
  )
}
export default IconFavorite
