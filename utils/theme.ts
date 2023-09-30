import { themeSettings } from "@/app/components/data/";

export const getSvgColor = (window: Window, theme: string | undefined) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (prefersDark || theme === 'dark') {
    return '#fff'
  } else {
    return '#191A1A'
  }
}

export const setTheme = (html: HTMLElement, localStorage: Storage, theme: 'dark' | 'light', e?: Event) => {
  if (e) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    theme = prefersDark.matches
      ? 'dark'
      : 'light'
  }

  html.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  html.dataset.theme = theme;
  localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, theme);
}
