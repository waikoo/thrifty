// "use client";
import { Dispatch, SetStateAction } from "react";
import { ThemeString } from "../types/theme";

export const DEFAULT_THEME: ThemeString = "dark";
export const LOCAL_STORAGE_KEY = "wantsDark";

export const userPrefersDark = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ?? null;
};

export const userWantsDarkLocally = (key: string) => {
  return localStorage.getItem(key);
};

export const setThemeAndLocalStorage = (
  prefersDark: boolean,
  localStorageKey: typeof LOCAL_STORAGE_KEY,
  setTheme: Dispatch<SetStateAction<ThemeString>>,
  setDefault?: ThemeString
) => {
  const themePreference = setDefault
    ? (DEFAULT_THEME === "dark").toString()
    : prefersDark.toString();

  setTheme(setDefault ? DEFAULT_THEME : prefersDark ? "dark" : "light");
  localStorage.setItem(localStorageKey, themePreference);
};

// new Theme

export const getCapitalizedNextTheme = (currentTheme: string | null) => {
  if (currentTheme) {
    console.log('currentTheme: ' + currentTheme)
    return currentTheme.charAt(0)?.toUpperCase() + currentTheme.slice(1);
  }
};

export const getOppositeTheme = (currentTheme: string | null) => {
  // const currentTheme = params.get("theme");
  if (currentTheme) {
    return currentTheme === "dark" ? "light" : "dark";
  }
};

export const setThemeToLocalStorage = (theme: string | null) => {
  if (theme && localStorage) {
    localStorage.setItem(LOCAL_STORAGE_KEY, `${theme === "dark"}`);
  }
};

