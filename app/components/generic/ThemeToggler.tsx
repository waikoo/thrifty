"use client";
import { useThemeStore } from "@/state/themeState";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const theme = useThemeStore((state) => state.theme)
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const [nextThemeText, setNextThemeText] = useState<'Light' | 'Dark' | null>(null)
  const LIGHT = theme === 'dark' ? 'text-gray-500 opacity-70' : 'text-black'
  const DARK = theme === 'dark' ? 'text-black' : 'text-gray-500 opacity-70'

  const handleToggleTheme = () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = newTheme
    updateTheme(newTheme)
  }

  useEffect(() => {
    setNextThemeText(theme === 'dark' ? 'Light' : 'Dark')
  }, [theme])

  return (
    <button
      className="flex cursor-pointer items-center gap-2 justify-self-end"
      onClick={handleToggleTheme}>

      <span className={`${LIGHT}`}>LIGHT</span>

      <div className={`relative grid h-[1.4rem] w-[2.5rem] items-center rounded-full ${theme !== 'dark' ? 'bg-black' : 'bg-white'} `}>

        <div className={`absolute h-[0.8rem] w-[0.8rem] rounded-full ${theme !== 'dark' ? 'bg-white' : 'bg-black'} transition-all ${theme === 'dark' ? 'translate-x-[1.4rem]' : 'translate-x-[0.3rem]'}`}></div>

      </div>
      <input type="checkbox" checked={theme === 'dark'} className="sr-only" />

      <span className={`${DARK}`}>DARK</span>

    </button>
  );
};

export default ThemeToggler;
// TODO: fallback
