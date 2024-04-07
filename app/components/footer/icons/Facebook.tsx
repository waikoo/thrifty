"use client"
import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme";

function Facebook() {
  const color = useThemeStore((state) => getSvgColor(state.theme));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      fill="none"
      viewBox="0 0 27 26"
    >
      <path
        fill={color}
        d="M26.015 13.008C26.015 5.828 20.188 0 13.007 0 5.828 0 0 5.827 0 13.008c0 6.295 4.475 11.537 10.406 12.747V16.91H7.805v-3.902h2.601V9.756a4.558 4.558 0 014.553-4.553h3.252v3.902h-2.602c-.715 0-1.3.586-1.3 1.301v2.601h3.902v3.903h-3.903v9.04c6.57-.65 11.707-6.192 11.707-12.942z"
      ></path>
    </svg>
  );
}

export default Facebook;
