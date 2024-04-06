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
        viewBox="0 0 22 19"
        fill="none"
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
