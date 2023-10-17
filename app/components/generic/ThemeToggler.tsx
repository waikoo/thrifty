"use client";
import { useDarkMode } from "../hooks/";
import { useTogglerStyles } from "../hooks/";

const ThemeToggler = () => {
  const { isDark, handleToggleTheme } = useDarkMode()
  const { getStyleForElement, bgColor, circleColor, xPos } = useTogglerStyles();

  return (
    <button
      className="flex cursor-pointer items-center gap-2 justify-self-end"
      onClick={handleToggleTheme}
    >
      <span className={`${getStyleForElement('light')}`} >
        LIGHT
      </span>

      <div className={`relative grid h-[1.4rem] w-[2.5rem] items-center rounded-full 
        ${bgColor}`}>

        <div className={`absolute h-[0.8rem] w-[0.8rem] rounded-full transition-all 
          ${circleColor} ${xPos}`}>
        </div>

      </div>

      <input type="checkbox"
        checked={isDark}
        className="sr-only"
        id="theme-toggler"
        onChange={() => { }}
      />

      <span className={`${getStyleForElement('dark')}`} >
        DARK
      </span>

    </button>
  );
};

export default ThemeToggler;
// TODO: fallback
