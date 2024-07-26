import { useEffect, useState } from "react";
import { useThemeStore } from "@/state/themeState";
import useMediaQuery from "@/app/components/hooks/useMediaQuery";
import { themeSettings } from "@/app/components/data/theme";
import { updateThemeInDb } from "@/utils/updateThemeInDb";

export default function useDarkMode(containsDark: boolean) {
  const { theme, updateTheme } = useThemeStore();
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false);
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setLocalTheme(localTheme);
    document.documentElement.classList.toggle('dark', localTheme === 'dark');
    document.documentElement.dataset.theme = localTheme
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (localTheme === 'dark').toString());
    updateTheme(localTheme);
    updateThemeInDb(localTheme)
  }, [prefersDarkMode, localTheme]);

  const handleToggleTheme = async () => {
    const lightOrDark = containsDark ? 'light' : 'dark'
    setLocalTheme(lightOrDark)
    updateTheme(lightOrDark);
    document.documentElement.classList.toggle('dark', containsDark);
    document.documentElement.dataset.theme = lightOrDark;
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, containsDark.toString());
    updateThemeInDb(lightOrDark)
  };

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  };
};

