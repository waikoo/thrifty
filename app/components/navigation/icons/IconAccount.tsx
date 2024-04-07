"use client"
import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme"
import useUserSession from "@/app/components/hooks/useUserSession"

const IconAccount = () => {
  // const { session } = useUserSession()
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={16}
      viewBox="0 0 18 17"
      // fill={session ? color : "none"}
      className="cursor-pointer"
    >
      <path
        stroke={color}
        strokeWidth={2}
        d="M1 17c0-3.132 3.52-5.668 7.853-5.668 4.332 0 7.861 2.536 7.861 5.668M8.853 8.203a3.601 3.601 0 100-7.203 3.601 3.601 0 000 7.203z"
      />
    </svg>
  )
}

export default IconAccount

