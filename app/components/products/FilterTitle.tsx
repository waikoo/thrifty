import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type FilterTitleProps = {
  type: string
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
  uncheckItems?: React.Dispatch<React.SetStateAction<string[]>>
  isExpanded: boolean
}

export default function FilterTitle({ type, setIsExpanded, uncheckItems, isExpanded }: FilterTitleProps) {

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

      <span
        className="cursor-pointer text-[0.75rem]"
        onClick={() => uncheckItems ? uncheckItems([]) : null}>
        Clear x
      </span>

    </div>

  )
}
