import { getSvgColor } from "@/utils/theme";
import { useThemeStore } from "@/state/themeState";

type IconPlusProps = {
  isHovered?: boolean
  isAdmin?: boolean
}

function IconPlus({ isHovered, isAdmin }: IconPlusProps) {
  const color = useThemeStore((state) => getSvgColor(
    state.theme
  ))

  const hoveredColor = useThemeStore((state) => getSvgColor(
    state.theme === 'dark' ? 'light' : 'dark'
  ))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        fill={isHovered || isAdmin ? hoveredColor : color}
        d="M11.143 6.857H6.857v4.286a.857.857 0 11-1.714 0V6.857H.857a.857.857 0 110-1.714h4.286V.857a.857.857 0 111.714 0v4.286h4.286a.857.857 0 010 1.714z"
      ></path>
    </svg>
  );
}

export default IconPlus;
