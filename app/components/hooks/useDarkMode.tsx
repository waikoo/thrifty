"use client"
import { useEffect } from "react"

import { useThemeStore } from "@/state"
import useMediaQuery from "@/app/components/hooks/useMediaQuery"
import { themeSettings } from "@/app/components/data/theme"

const useDarkMode = (htmlDataset: DOMStringMap) => {
  const { theme, updateTheme } = useThemeStore()
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    updateTheme(newTheme)
    htmlDataset.theme = newTheme
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (newTheme === 'dark').toString())
  }, [prefersDarkMode])

  const handleToggleTheme = () => {
    const newTheme = htmlDataset.theme === 'dark' ? 'light' : 'dark'

    htmlDataset.theme = newTheme
    updateTheme(newTheme)
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (newTheme === 'dark').toString())
  }

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  }
}

export default useDarkMode
