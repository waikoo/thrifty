"use client"
import React from 'react'
import { IconSearch } from '.';
import { useThemeContext } from '../hooks/ThemeProvider';

type SearchBarProps = {
}

export default function SearchBar({ }: SearchBarProps) {
  const { theme } = useThemeContext()
  const color = theme !== "dark" ? "#191A1A" : "#fff"

  return (
    <section className={`text-${color} flex gap-2 items-end`}>
      <IconSearch />
      <input
        type="search"
        placeholder="SEARCH"
        className={`bg-transparent text-${color} outline-0 appearance-none focus:outline-none pt-2 w-full self-baseline placeholda`}
        style={{ WebkitAppearance: 'none', appearance: 'none' }}
      />
    </section>
  );
}
// TODO: cover the clear button (x)
