"use client";
import { ThemeReturn, ThemeString } from "@/types/theme";
import {
  DEFAULT_THEME,
  LOCAL_STORAGE_KEY,
  setThemeAndLocalStorage,
  userPrefersDark,
  userWantsDarkLocally,
} from "@/utils/theme";
import { useEffect, useState } from "react";

const useThemePreference = (manual: ThemeString = DEFAULT_THEME): ThemeReturn => {
  const [theme, setTheme] = useState<ThemeString>(manual);

  useEffect(() => {
    const prefersDark = userPrefersDark();
    const wantsDarkLocally = userWantsDarkLocally(LOCAL_STORAGE_KEY);
    const shouldSetDefault = prefersDark !== null || wantsDarkLocally !== null;

    setThemeAndLocalStorage(
      prefersDark,
      LOCAL_STORAGE_KEY,
      setTheme,
      shouldSetDefault ? DEFAULT_THEME : undefined
    );
  }, []);

  return { theme, setTheme };
};

export default useThemePreference;
