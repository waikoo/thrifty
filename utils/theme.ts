import { ThemeString } from "../types/theme";
import { Dispatch, SetStateAction } from "react";

export const DEFAULT_THEME: ThemeString = "dark";
export const LOCAL_STORAGE_KEY = "wantsDark";

export const userPrefersDark = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ?? null
};

export const userWantsDarkLocally = (key: string) => {
  return localStorage.getItem(key);
}

export const setThemeAndLocalStorage = (
    prefersDark: boolean,
    localStorageKey: typeof LOCAL_STORAGE_KEY,
    setTheme: Dispatch<SetStateAction<ThemeString>>,
    setDefault?: ThemeString
  ) => {
    const themePreference = setDefault 
    ? (DEFAULT_THEME === 'dark').toString() 
    : prefersDark.toString()

    setTheme(setDefault ? DEFAULT_THEME : prefersDark ? 'dark' : 'light')
    localStorage.setItem(localStorageKey, themePreference)
  };