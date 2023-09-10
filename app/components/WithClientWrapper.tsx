"use client";
import React, { MouseEvent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "./styled";
import { useThemePreference } from "./hooks";
import { ThemeString } from "@/types/theme";
import { Header, ThemeToggler } from "../components";
import { themeStyles } from "./data";

type Props = {
  children: ReactNode;
};

const withClientWrapper = ({ children }: Props) => {
  // men | women | kid => useContext ? state sent to page
  const { theme: userThemePreference, setTheme } = useThemePreference();

  const clickHandler = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const value: ThemeString = (target as HTMLButtonElement).dataset.value as ThemeString;
    setTheme(value);
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={themeStyles[userThemePreference]}>
        <GlobalStyles />
        <Header>
          {" "}
          <ThemeToggler clickHandler={clickHandler} />{" "}
        </Header>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default withClientWrapper;
