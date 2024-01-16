"use client"

import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"
import { useFavoriteStore } from "@/state/uiState"

type IconFavoriteProps = {
}

const IconFavorite = ({ }: IconFavoriteProps) => {
  const color = useThemeStore((state) => getSvgColor(state.theme))
  const { favoritesLength } = useFavoriteStore()

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
          stroke={color}
          strokeWidth={2.5}
          d="m16.667 7.488-6.745 6.744-6.744-6.744A3.654 3.654 0 1 1 8.345 2.32l.693.694.884.884.884-.884.694-.694a3.654 3.654 0 1 1 5.167 5.168Z"
        />
      </svg>
      {favoritesLength > 0 && (
        <div className="bg-content text-bkg absolute right-[-15px] top-[-15px] flex h-[20px] w-[20px] items-center justify-center rounded-full p-[5px] text-center">
          <span className="self-center text-sm">{favoritesLength}</span>
        </div>
      )}
    </div>
  )
}
export default IconFavorite
