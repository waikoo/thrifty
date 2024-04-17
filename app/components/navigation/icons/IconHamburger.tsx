"use client"
import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme";

function IconHamburger() {
  const color = useThemeStore((state) => getSvgColor(state.theme));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="20"
      fill="none"
      viewBox="0 0 27 20"
    >
      <path fill={color} d="M0 0H27V3H0z"></path>
      <path fill={color} d="M0 8.235H21.316V11.235H0z"></path>
      <path fill={color} d="M0 16.471H15.632V19.471H0z"></path>
    </svg>
  );
}

export default IconHamburger;
