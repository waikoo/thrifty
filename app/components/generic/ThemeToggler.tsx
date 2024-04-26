"use client"
import { twMerge as tm } from 'tailwind-merge'

import { useDarkMode, useTogglerStyles } from "@/app/components/hooks/";

type ThemeTogglerProps = {
  className?: string
}

const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  let containsDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');
  const { isDark, handleToggleTheme } = useDarkMode(containsDark)

  const { bgColor, circleColor, xPos } = useTogglerStyles(isDark)

  return (
    <button
      className={tm(`flex cursor-pointer items-center gap-2 justify-self-end ${className}`)}
      onClick={handleToggleTheme}
    >

      <div className={`relative grid h-[1.4rem] w-[2.5rem] items-center rounded-full 
        ${bgColor}`}>

        <div className={`absolute h-[0.8rem] w-[0.8rem] rounded-full transition-all t_shadow
          ${circleColor} ${xPos}`}>
        </div>

      </div>

      <input type="checkbox"
        checked={isDark}
        className="sr-only"
        id="theme-toggler"
        onChange={() => { }}
      />

    </button>
  );
};

export default ThemeToggler;
