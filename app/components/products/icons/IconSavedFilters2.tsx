import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from '@/utils/theme';

export default function IconSavedFilters2() {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
    >
      <path
        stroke={color}
        strokeWidth="2"
        d="M7.508 6.008L2.5 1h14.45l-5.008 5.008m-4.434 0v9.442l4.434-3.628V6.008m-4.434 0h4.434"
      ></path>
    </svg>
  );
}
