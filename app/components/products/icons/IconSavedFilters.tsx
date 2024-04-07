import { useThemeStore } from "@/state/themeState"
import { getSvgColor } from '@/utils/theme';

function IconSavedFilters() {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      fill="none"
      viewBox="0 0 13 13"
      transform="translate(0, 4)"
    >
      <path
        fill={color}
        d="M5.813 13H4.55V6.441L0 1.025V0h12.35v1.019L8.017 6.435v4.361L5.813 13zm-.396-.867h.037l1.696-1.696V6.131L11.362.867H.999l4.418 5.258v6.008z"
      ></path>
    </svg>
  );
}

export default IconSavedFilters;
