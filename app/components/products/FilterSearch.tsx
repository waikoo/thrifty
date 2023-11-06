"use client"
import { FiSearch } from "react-icons/fi"

type FilterSearchProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterSearch({ setSearchValue }: FilterSearchProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="relative flex">
      <FiSearch className="text-grey absolute left-1 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        placeholder="Search Size"
        className="bg-bkg border-b-[0.1rem] pl-7 outline-none"
        onChange={onChangeHandler}
      />
    </div>
  )
}
