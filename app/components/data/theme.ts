export const heroCarouselCircleColors = {
  stroke: {
    light: '#000',
    dark: '#fff',
  },
  fill: {
    selected: {
      dark: '#fff',
      light: '#000',
    },
    unselected: {
      dark: '#000',
      light: '#fff',
    }
  }
}

type TThemeSettings = {
  DEFAULT_THEME: 'light' | 'dark',
  LOCAL_STORAGE_KEY: 'wantsDark'
}

export const themeSettings: TThemeSettings = {
  DEFAULT_THEME: 'light',
  LOCAL_STORAGE_KEY: 'wantsDark'
}
