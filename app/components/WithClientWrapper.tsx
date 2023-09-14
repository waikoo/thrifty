// "use client";
import { ThemeString } from "@/types/theme";
import { MouseEvent, ReactNode } from "react";
import { Header, ThemeToggler } from "../components";
import { Banner } from "./Banner";
// import { useThemePreference } from "./hooks";

type Props = {
  children: ReactNode;
};

const withClientWrapper = ({ children }: Props) => {
  // const { theme: userThemePreference, setTheme } = useThemePreference();

  // const clickHandler = ({ target }: MouseEvent<HTMLButtonElement>) => {
  //   const value: ThemeString = (target as HTMLButtonElement).dataset.value as ThemeString;
  //   setTheme(value);
  // };

  return <>{children}</>;
};

export default withClientWrapper;
