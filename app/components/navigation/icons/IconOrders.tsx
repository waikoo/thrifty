"use client"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

function Icon() {
  const color = useThemeStore((state) => getSvgColor(state.theme, true))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <g clipPath="url(#clip0_2948_2495)">
        <path
          fill={color}
          d="M6.228 3.75H7.7V7.5h5.491a.737.737 0 00.737-.737V4.487a.736.736 0 00-.737-.737h-2.003A2.61 2.61 0 006.964.796 2.612 2.612 0 002.74 3.75H.737A.737.737 0 000 4.487v2.276a.737.737 0 00.737.737h5.49V3.75zM7.7 2.612A1.138 1.138 0 118.839 3.75H7.701V2.612zm-3.75 0a1.138 1.138 0 012.277 0V3.75H5.089a1.138 1.138 0 01-1.138-1.138zM7.7 15h4.42a.737.737 0 00.736-.737V8.571H7.701V15zm-6.63-.737a.737.737 0 00.737.737h4.42V8.571H1.07v5.692z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2948_2495">
          <path fill={color} d="M0 0H13.929V15H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
