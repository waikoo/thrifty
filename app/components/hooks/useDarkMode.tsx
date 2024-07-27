import { useEffect, useState } from "react";
import { useThemeStore } from "@/state/themeState";
import useMediaQuery from "@/app/components/hooks/useMediaQuery";
import { themeSettings } from "@/app/components/data/theme";
import { updateThemeInDb } from "@/utils/updateThemeInDb";
import { getThemeFromDb } from "@/utils/getThemeFromDb";

export default function useDarkMode(containsDark: boolean) {
  const { theme, updateTheme } = useThemeStore();
  const prefersDarkMode = useMediaQuery(['(prefers-color-scheme: dark)'], [true], false);
  const [localTheme, setLocalTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // db theme has precedence over browser preference
    if (localTheme === null) {
      getThemeFromDb().then(themeFromDb => {
        if (themeFromDb === null) {
          setLocalTheme(containsDark ? 'dark' : 'light');
        } else {
          setLocalTheme(themeFromDb);
        }
      })
    } else {
      setLocalTheme(localTheme);
      document.documentElement.classList.toggle('dark', localTheme === 'dark');
      document.documentElement.dataset.theme = localTheme;
      localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (localTheme === 'dark').toString());
      updateTheme(localTheme);
      updateThemeInDb(localTheme);
    }
  }, [prefersDarkMode, localTheme, updateTheme, containsDark]);

  const handleToggleTheme = async () => {
    const newTheme = containsDark ? 'light' : 'dark';
    setLocalTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, (newTheme === 'dark').toString());
    updateTheme(newTheme);
    updateThemeInDb(newTheme);
  };

  return {
    isDark: theme === 'dark',
    handleToggleTheme,
  };
}

