import React from 'react'
import { IconSearch } from '.';

type SearchBarProps = {
}

export default function SearchBar({ }: SearchBarProps) {

  return (
    <section className={`text-bkg flex gap-2 items-end`}>
      <IconSearch />
      <input
        type="search"
        placeholder="SEARCH"
        className={`bg-transparent text-content outline-0 appearance-none focus:outline-none pt-2 w-full self-baseline placeholda`}
        style={{ WebkitAppearance: 'none', appearance: 'none' }}
      />
    </section>
  );
}
// TODO: cover the clear button (x)
