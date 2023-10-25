"use client"
import { useEffect } from "react"
import { useThemeStore } from "@/state"
import { useMediaQuery, useLocalStorage } from "./"
import { themeSettings } from "../data"

const useDarkMode = (htmlDataset: DOMStringMap) => {
  const theme = useThemeStore((state) => state.theme)
  htmlDataset.theme = theme

  const updateTheme = useThemeStore((state) => state.updateTheme)
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)
  useLocalStorage(themeSettings.LOCAL_STORAGE_KEY, prefersDarkMode)

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    updateTheme(newTheme)
    htmlDataset.theme = newTheme
  }, [prefersDarkMode])

  const handleToggleTheme = () => {
    const newTheme = htmlDataset.theme === 'dark' ? 'light' : 'dark'

    htmlDataset.theme = newTheme
    updateTheme(newTheme)
  }

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  }
}

export default useDarkMode
