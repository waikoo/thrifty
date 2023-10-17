"use client"
import { useEffect } from "react"
import { useThemeStore } from "@/state"
import { useMediaQuery, useLocalStorage } from "./"
import { themeSettings } from "../data"

const useDarkMode = () => {
  const theme = useThemeStore((state) => state.theme)
  document.documentElement.dataset.theme = theme

  const updateTheme = useThemeStore((state) => state.updateTheme)
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)
  useLocalStorage(themeSettings.LOCAL_STORAGE_KEY, prefersDarkMode)

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    updateTheme(newTheme)
    document.documentElement.dataset.theme = newTheme
  }, [prefersDarkMode])

  const handleToggleTheme = () => {
    const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'

    document.documentElement.dataset.theme = newTheme
    updateTheme(newTheme)
  }

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  }
}

export default useDarkMode
