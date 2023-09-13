"use client";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeString } from "@/types/theme";
import { MouseEvent, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Header, ThemeToggler } from "../components";
import { Banner } from "./Banner";
import { themeStyles } from "./data";
import { useThemePreference } from "./hooks";
import { GlobalStyles } from "./styled";

type Props = {
  children: ReactNode;
};

const withClientWrapper = ({ children }: Props) => {
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
          <ThemeToggler clickHandler={clickHandler} />
          <Banner />
        </Header>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default withClientWrapper;
