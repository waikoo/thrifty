import { FiSearch } from "react-icons/fi"

type FilterSearchProps = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  type: string
}

export default function FilterSearch({ setSearchValue, type }: FilterSearchProps) {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="relative flex mt-2">
      <FiSearch className="text-grey absolute left-1 top-1/2 -translate-y-1/2" />
      <input
        type="search"
        placeholder={`Search by ${type.toLowerCase()}`}
        className="bg-t_white dark:bg-t_black sm:w-full border-t-0 border-x-0 border-b-[0.1rem] pl-7 outline-none"
        onChange={onChangeHandler}
      />
    </div>
  )
}
