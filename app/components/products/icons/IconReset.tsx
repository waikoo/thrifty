import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from '@/utils/theme';

function IconReset() {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      fill="none"
      viewBox="0 0 12 11"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.4 1c1.489.85 2.467 2.48 2.467 4.317a4.933 4.933 0 11-7.674-4.102M8.4 1v2.467M8.4 1h2.467"
      ></path>
    </svg>
  );
}

export default IconReset;

