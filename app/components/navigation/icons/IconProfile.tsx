"use client"
import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from "@/utils/theme"

function IconProfile() {
  const color = useThemeStore((state) => getSvgColor(state.theme, true))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="15"
      fill="none"
      viewBox="0 0 19 15"
    >
      <g clipPath="url(#clip0_2983_2493)">
        <path
          fill={color}
          d="M8.438 4.688A2.809 2.809 0 015.624 7.5a2.809 2.809 0 01-2.813-2.813 2.809 2.809 0 012.813-2.812 2.809 2.809 0 012.813 2.813zM11.25 15H0v-1.875c0-2.072 2.522-3.75 5.625-3.75s5.625 1.678 5.625 3.75m7.5-5.625v1.875h-8.438V7.5m8.438-3.75v1.875h-8.438V3.75M18.75 0v1.875h-8.438V0h8.438z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2983_2493">
          <path fill={color} d="M0 0H18.75V15H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconProfile;
