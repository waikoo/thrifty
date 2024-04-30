"use client"
import { useEffect } from "react"

import { useThemeStore } from "@/state/themeState";
import useMediaQuery from "@/app/components/hooks/useMediaQuery"
import { themeSettings } from "@/app/components/data/theme"

const useDarkMode = (containsDark: boolean) => {
  const { theme, updateTheme } = useThemeStore()
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    updateTheme(newTheme)
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.dataset.theme = 'dark'
    }

    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (newTheme === 'dark').toString())
  }, [prefersDarkMode, updateTheme])

  const handleToggleTheme = () => {
    const newTheme = containsDark ? 'light' : 'dark'

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.dataset.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.dataset.theme = 'light'
    }
    updateTheme(newTheme)
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (newTheme === 'dark').toString())
  }

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  }
}

export default useDarkMode
