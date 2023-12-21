import { useThemeStore } from "@/state/themeState";
import { getSvgColor } from "@/utils/theme";

type IconProductsProps = {
  isHovered?: boolean
  home?: boolean
}

function IconProducts({ isHovered, home }: IconProductsProps) {
  const color = useThemeStore((state) => getSvgColor(state.theme))

  const hoveredColor = useThemeStore((state) => getSvgColor(
    state.theme === 'dark' ? 'light' : 'dark'
  ))

  const margin = home ? 'mt-2' : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="14"
      fill="none"
      viewBox="0 0 13 14"
      className={`${margin} self-center`}
    >
      <path
        fill={isHovered ? hoveredColor : color}
        d="M5.6 12.197V7.404L1.4 4.97v4.795l4.2 2.432zm1.4 0l4.2-2.432V4.97L7 7.403v4.795zm-1.4 1.61L.7 10.99A1.37 1.37 0 010 9.783V4.218A1.362 1.362 0 01.7 3.01L5.6.193a1.376 1.376 0 011.4 0l4.9 2.817a1.357 1.357 0 01.7 1.208v5.565a1.365 1.365 0 01-.7 1.207L7 13.807a1.377 1.377 0 01-1.4 0zm3.5-9.24l1.348-.77L6.3 1.4l-1.365.788L9.1 4.567zM6.3 6.196l1.365-.788L3.518 3.01l-1.365.788L6.3 6.194z"
      ></path>
    </svg>
  );
}

export default IconProducts;
