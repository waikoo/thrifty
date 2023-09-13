"use client";
import { MouseEvent } from "react";
// import { SButton, SThemeToggler } from "./styled";

interface ThemeTogglerProps {
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ThemeToggler({ clickHandler }: ThemeTogglerProps) {
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    clickHandler(e);
  };

  return (
    <section className="">
      <button className="bg-white dark:bg-zinc-500" data-value="light" onClick={handleButtonClick}>
        Light
      </button>
      <button data-value="dark" onClick={handleButtonClick}>
        Dark
      </button>
    </section>
  );
}
