"use client"
import { twMerge as tm } from 'tailwind-merge';

import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from '@/utils/theme';

type IconChevronDownProps = {
  className?: string
}
function IconChevronDown({ className }: IconChevronDownProps) {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      fill="none"
      viewBox="0 0 10 5"
      className={tm(`${className}`)}
    >
      <path
        fill={color}
        d="M0 0l5 5 5-5H0z"></path>
    </svg>
  );
}

export default IconChevronDown;
