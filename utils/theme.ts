import { themeSettings } from "@/app/components/data/";

type TsetTheme = (
  html: HTMLElement,
  localStorage: Storage,
  theme: 'dark' | 'light',
  onUpdate: (theme: 'dark' | 'light') => void,
  e?: React.MouseEvent<HTMLButtonElement>
) => void

export const setTheme: TsetTheme = (html, localStorage, theme, onUpdate, e?) => {
  if (e) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    theme = prefersDark.matches
      ? 'dark'
      : 'light'
  }

  html.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  html.dataset.theme = theme;
  localStorage.setItem(themeSettings.LOCAL_STORAGE_KEY, theme);

  onUpdate(theme)
}

export const getSvgColor = (theme: 'light' | 'dark') => {
  return theme === 'dark' ? '#fff' : '#191A1A'
}
