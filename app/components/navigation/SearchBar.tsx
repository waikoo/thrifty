import React from 'react'
import { IconSearch } from '.';

type SearchBarProps = {
  theme: string | null
}

export default function SearchBar({ theme }: SearchBarProps) {
  const currentTheme = theme === "dark" ? "#fff" : "#191A1A"

  return (
    <section className={`text-${currentTheme} flex content-start gap-2`}>
      <IconSearch theme={theme} />
      <input
        type="search"
        placeholder="SEARCH"
        className={`bg-transparent text-${currentTheme} outline-0 appearance-none focus:outline-none pt-2 w-full `}
        style={{ WebkitAppearance: 'none', appearance: 'none' }}
      />
    </section>
  );
}
// TODO: cover the clear button (x)
