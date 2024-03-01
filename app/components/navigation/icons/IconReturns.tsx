"use client"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

type IconReturnsProps = {
  invert?: boolean
  isHovered?: boolean
}

function IconReturns({ invert, isHovered }: IconReturnsProps) {
  const color = useThemeStore((state) => getSvgColor(state.theme, invert ? invert : isHovered))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      fill="none"
      viewBox="0 0 14 15"
    >
      <g clipPath="url(#clip0_2948_2497)">
        <path
          fill={color}
          d="M6.619 9H9c.213 0 .39-.072.535-.216a.725.725 0 00.215-.534.728.728 0 00-.215-.535A.728.728 0 009 7.5H6.619l.675-.675a.641.641 0 00.215-.516.763.763 0 00-.234-.534.711.711 0 00-.525-.206.711.711 0 00-.525.206l-1.95 1.95a.711.711 0 00-.206.525c0 .213.069.387.206.525l1.95 1.95a.711.711 0 00.525.206.711.711 0 00.525-.206.7.7 0 00.206-.515.765.765 0 00-.206-.535L6.619 9zM1.5 15c-.413 0-.766-.147-1.06-.44A1.446 1.446 0 010 13.5V3c0-.413.147-.766.44-1.06.294-.293.647-.44 1.06-.44h3.15c.162-.45.434-.813.816-1.087A2.14 2.14 0 016.75 0c.475 0 .903.138 1.285.412.38.276.652.638.815 1.088H12c.412 0 .766.147 1.06.44.293.294.44.647.44 1.06v10.5c0 .412-.147.766-.44 1.06-.294.293-.648.44-1.06.44H1.5zM6.75 2.437a.547.547 0 00.563-.562.548.548 0 00-.16-.403.548.548 0 00-.403-.16.546.546 0 00-.563.563.544.544 0 00.563.563z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2948_2497">
          <path fill={color} d="M0 0H13.5V15H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconReturns;
