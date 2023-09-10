"use client";
import React, { MouseEvent } from "react";
import { SButton } from "./styled";
// can you suggest any improvements for this component?
interface ThemeTogglerProps {
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function ThemeToggler({ clickHandler }: ThemeTogglerProps) {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    clickHandler(e);
  };

  return (
    <>
      <button data-value="light" onClick={handleButtonClick}>
        Light
      </button>
      <SButton data-value="dark" onClick={handleButtonClick}>
        Dark
      </SButton>
    </>
  );
}
