"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { LOCAL_STORAGE_KEY } from "@/utils/theme";

const ThemeToggler = (): JSX.Element => {
  const params = new URLSearchParams(useSearchParams());
  const currentTheme = params.get("theme")
  const pathname = usePathname()


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, `${currentTheme === "dark"}`)
    if (currentTheme) {
      document.documentElement.dataset.theme = currentTheme
      document.documentElement.classList.toggle('dark', currentTheme === 'dark')
    }
  }, [params.get("theme")])

  return (
    <Link href={{
      pathname: pathname,
      query: {
        b: params.get("b"),
        theme: currentTheme === 'light' ? 'dark' : 'light',
      }
    }}>
      <button className="bg-content text-bkg col-start-1 col-end-2 p-1.5">
        {`To ${currentTheme === 'light' ? 'Dark' : 'Light'}`}</button>
    </Link>
  );
};

export default ThemeToggler;
// TODO: fallback
