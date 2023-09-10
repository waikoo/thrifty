"use client";
import StyledComponentsRegistry from "@/lib/registry";
import React, { MouseEvent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, themeStyles } from "./styled";
import useThemePreference from "./hooks/useThemePreference";
import { ThemeReturn, ThemeString } from "@/types/theme";
import { ThemeToggler } from "./ThemeToggler";

type Props = {
  children: ReactNode;
};

const withClientWrapper = ({ children }: Props) => {
  const { theme: userThemePreference, setTheme } = useThemePreference();

  const clickHandler = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const value: ThemeString = (target as HTMLButtonElement).dataset
      .value as ThemeString;
    setTheme(value);
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={themeStyles[userThemePreference]}>
        <GlobalStyles />
        <ThemeToggler clickHandler={clickHandler} />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default withClientWrapper;
