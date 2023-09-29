"use client";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY, DEFAULT_THEME } from "@/utils/theme";
import { create } from 'zustand'

type State = {
  theme: string | undefined
}

type Action = {
  updateTheme: (theme: State['theme']) => void
}

// let theme = 'light'

export const useThemeStore = create<State & Action>(set => ({
  theme: DEFAULT_THEME,
  updateTheme: (theme) => set(() => ({ theme: theme }))
}))

const ThemeToggler = (): JSX.Element => {
  const [darkTheme, setDarkTheme] = useState(false);
  const updateTheme = useThemeStore(state => state.updateTheme);

  const toggleTheme = () => {
    const nextTheme = darkTheme ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark')
    document.documentElement.dataset.theme = nextTheme

    setDarkTheme(!darkTheme)
    localStorage.setItem(LOCAL_STORAGE_KEY, `${darkTheme}`)
    updateTheme(nextTheme)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        document.documentElement.dataset.theme = 'dark'
        setDarkTheme(true)
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.dataset.theme = 'light'
        setDarkTheme(false)
      }
      updateTheme(document.documentElement.dataset.theme);
    }
  }, [])

  return (
    <button className="bg-content text-bkg col-start-1 col-end-2 p-1.5" onClick={toggleTheme}>
      {`To ${!darkTheme ? 'Dark' : 'Light'}`}
    </button>
  );
};

export default ThemeToggler;
// TODO: fallback
