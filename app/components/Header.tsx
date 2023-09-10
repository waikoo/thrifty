"use client";
import { Banner } from "./Banner";
import React, { ReactNode } from "react";
import { StyledHeader, StyledMessage } from "./styled";
import { bannerMessages } from "./data";
import { useBanner } from "./hooks";
// import LocalePicker from './LocalePicker';

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const { showBanner, closeBanner } = useBanner(true);
  return (
    <StyledHeader>
      {children} {/* ThemeToggler */}
      {/* <LocalePicker /> */}
      {showBanner ? <Banner bannerMessages={bannerMessages} closeBanner={closeBanner} /> : null}
    </StyledHeader>
  );
}
/* 
Nav
Men/Women/Kids - with dropdown hover || click
*/
