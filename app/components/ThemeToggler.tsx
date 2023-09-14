"use client";
import { MouseEvent, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LOCAL_STORAGE_KEY, setThemeToLocalStorage } from "@/utils/theme";

const ThemeToggler = (): JSX.Element => {
  const params = new URLSearchParams(useSearchParams());
  const currentTheme = params.get("theme")

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, `${currentTheme === "dark"}`)
    if (currentTheme) {
      document.documentElement.dataset.theme = currentTheme
      document.documentElement.classList.toggle('dark', currentTheme === 'dark')
    }
  }, [params.get("theme")])

  return (
    <section className="">
      <Link href={{
        pathname: '/',
        query: {
          b: params.get("b"),
          theme: currentTheme === 'light' ? 'dark' : 'light',
        }
      }}>
        <button className="bg-white dark:bg-zinc-500">{`To ${params.get('theme') === 'light' ? 'Dark' : 'Light'}`}</button>
      </Link>
    </section>
  );
};

export default ThemeToggler;
// TODO: fallback
