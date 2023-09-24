"use client";
import { useState } from "react";
import { LOCAL_STORAGE_KEY } from "@/utils/theme";

const ThemeToggler = (): JSX.Element => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    if (darkTheme) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setDarkTheme(!darkTheme)
    localStorage.setItem(LOCAL_STORAGE_KEY, `${darkTheme}`)
  }

  return (
    <button className="bg-content text-bkg col-start-1 col-end-2 p-1.5" onClick={toggleTheme}>
      {`To ${!darkTheme ? 'Dark' : 'Light'}`}
    </button>
  );
};

export default ThemeToggler;
// TODO: fallback
