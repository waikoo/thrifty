import { Category, Locales } from "@/types/home";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type FilterTitleProps = {
  type: string
  lang: Locales
  category: Category['category']
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
  isExpanded: boolean
  clearedLink: string
  setCheckbox: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
  checkbox: { [key: string]: boolean }
  searchParamos: ReadonlyURLSearchParams
}

export default function FilterTitle({ type, category, setIsExpanded, isExpanded, clearedLink, setCheckbox, checkbox, searchParamos }: FilterTitleProps) {

  const handleToggle = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded)
  }

  return (
    <div className="flex justify-between">

      <h3
        className="flex cursor-pointer select-none gap-4 text-[0.875rem] font-bold"
        onClick={handleToggle}>
        {isExpanded ? (<FiChevronUp />) : (<FiChevronDown />)}
        {type}
      </h3>

      <Link href={`${clearedLink}`}
        className="cursor-pointer text-[0.75rem]"
        onClick={() => {
          searchParamos.forEach((key: string) => {
            key.split(',').forEach((key: string) => {
              setCheckbox(prevCheckbox => ({
                ...prevCheckbox,
                [key]: false
              }))
            })
          })
        }}
      >
        Clear x
      </Link>

    </div>

  )
}
