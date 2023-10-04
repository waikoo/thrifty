import { themeSettings } from '@/app/components/data'
import { create } from 'zustand'

export type State = {
  theme: 'dark' | 'light'
}

type Action = {
  toggleTheme: () => void
  updateTheme: (theme: State['theme']) => void
}

export const useThemeStore = create<State & Action>(set => ({
  theme: themeSettings.DEFAULT_THEME,
  toggleTheme: () => set(state => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  updateTheme: (theme) => set(() => ({ theme: theme })),
}))

