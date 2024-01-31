import { useThemeStore } from "@/state"
import { getSvgColor } from '@/utils/theme';

function IconHideFilters() {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="10"
      fill="none"
      viewBox="0 0 15 10"
      transform="translate(0, 7)"

    >
      <path
        fill={color}
        d="M5.542 9.5h3.166V7.917H5.542V9.5zM0 0v1.583h14.25V0H0zm2.375 5.542h9.5V3.958h-9.5v1.584z"
      ></path>
    </svg>
  );
}

export default IconHideFilters;
