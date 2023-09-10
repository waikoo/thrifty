"use client";
import React, { MouseEvent } from "react";
import { SButton, SThemeToggler } from "./styled";

interface ThemeTogglerProps {
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ThemeToggler({ clickHandler }: ThemeTogglerProps) {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    clickHandler(e);
  };

  return (
    <SThemeToggler>
      <button data-value="light" onClick={handleButtonClick}>
        Light
      </button>
      <SButton data-value="dark" onClick={handleButtonClick}>
        Dark
      </SButton>
    </SThemeToggler>
  );
}
