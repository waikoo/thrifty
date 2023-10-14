"use client"
import { useEffect } from "react"
import { useThemeStore } from "@/state"
import useMediaQuery from "./useMediaQuery"
import useLocalStorage from "./useLocalStorage"
import { themeSettings } from "../data"

const useDarkMode = () => {
  const updateTheme = useThemeStore((state) => state.updateTheme)
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false)
  useLocalStorage(themeSettings.LOCAL_STORAGE_KEY, prefersDarkMode)

  useEffect(() => {
    const newTheme = prefersDarkMode ? 'dark' : 'light'

    updateTheme(newTheme)
    document.documentElement.dataset.theme = newTheme
  }, [prefersDarkMode])
}

export default useDarkMode
