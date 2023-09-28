import { ThemeString } from "../types/theme";

export const DEFAULT_THEME: ThemeString = "dark";
export const LOCAL_STORAGE_KEY = "wantsDark";

export const stroke = {
  light: '#000',
  dark: '#fff',
}

export const fill = {
  selected: {
    dark: '#fff',
    light: '#000',
  },
  unselected: {
    dark: '#000',
    light: '#fff',
  }
}
