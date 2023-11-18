import { Category, Locales } from "@/types/home";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type FilterTitleProps = {
  type: string
  lang: Locales
  category: Category['category']
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
  isExpanded: boolean
  clearedLink: string
}

export default function FilterTitle({ type, setIsExpanded, isExpanded, clearedLink }: FilterTitleProps) {

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
        className="cursor-pointer text-[0.75rem]" >
        Clear x
      </Link>

    </div>

  )
}
