import { Dispatch, SetStateAction } from "react";

export type ThemeString = "light" | "dark";

export interface ThemeReturn {
  theme: ThemeString;
  setTheme: Dispatch<SetStateAction<ThemeString>>;
}

export type IconMenuProps = {
  color: string;
}
