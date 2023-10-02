"use client";
import { useThemeStore } from "@/state/themeState";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const theme = useThemeStore((state) => state.theme)
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const [nextThemeText, setNextThemeText] = useState<'Light' | 'Dark' | null>(null)

  const handleToggleTheme = () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = newTheme
    updateTheme(newTheme)
  }

  useEffect(() => {
    setNextThemeText(theme === 'dark' ? 'Light' : 'Dark')
  }, [theme])

  return (
    <button className="bg-content text-bkg col-start-1 col-end-2 p-1.5" onClick={handleToggleTheme}>
      {`Toggle to ${nextThemeText}`}
    </button>
  );
};

export default ThemeToggler;
// TODO: fallback
