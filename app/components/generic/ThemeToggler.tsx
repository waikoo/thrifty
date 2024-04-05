"use client";
import { useParams } from "next/navigation";

import { twMerge as tm } from 'tailwind-merge'

import { useTranslation } from "@/i18n/client";
import { Locales } from "@/types/home";
import { useDarkMode, useTogglerStyles } from "@/app/components/hooks/";

type ThemeTogglerProps = {
  className?: string
}

const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const fallbackDarkMode = {
    isDark: false,
    handleToggleTheme: () => { }
  }

  const { isDark, handleToggleTheme } =
    typeof document !== 'undefined'
      ? useDarkMode(document?.documentElement.dataset)
      : fallbackDarkMode

  const { getStyleForElement, bgColor, circleColor, xPos } = useTogglerStyles(isDark)

  let lang = useParams()?.lang as Locales
  const { t } = useTranslation(lang, 'layout')

  return (
    <button
      className={tm(`flex cursor-pointer items-center gap-2 justify-self-end ${className}`)}
      onClick={handleToggleTheme}
    >

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

    </button>
  );
};

export default ThemeToggler;
