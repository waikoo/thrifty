"use client"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconAddressesProps = {
  invert?: boolean
  isHovered?: boolean
}

function IconAddresses({ invert, isHovered }: IconAddressesProps) {
  const color = useThemeStore((state) => getSvgColor(state.theme, invert ? invert : isHovered))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="none"
      viewBox="0 0 17 17"
    >
      <path
        fill={color}
        d="M8.5 9.917c.39 0 .723-.14 1-.417.278-.277.416-.61.416-1s-.138-.723-.415-1A1.366 1.366 0 008.5 7.082c-.39 0-.723.139-1 .416A1.365 1.365 0 007.083 8.5c0 .39.139.723.417 1 .277.278.61.417 1 .417zM5.666 12.75h5.667v-.407a1.411 1.411 0 00-.868-1.31 5.361 5.361 0 00-.947-.302 4.772 4.772 0 00-1.018-.106c-.354 0-.694.036-1.019.106-.324.071-.64.171-.947.301a1.411 1.411 0 00-.868 1.31v.408zm7.084 2.833h-8.5c-.39 0-.723-.138-1-.415a1.365 1.365 0 01-.417-1.001V2.833c0-.39.139-.723.417-1 .277-.278.61-.416 1-.416h5.082a1.401 1.401 0 01.992.407l3.435 3.435a1.402 1.402 0 01.407.992v7.916c0 .39-.138.723-.415 1a1.366 1.366 0 01-1.001.416z"
      ></path>
    </svg>
  );
}

export default IconAddresses;
