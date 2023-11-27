"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useFilterTitleStore } from "@/state/uiState"
import { useClearTitle } from "../hooks";

type FilterTitleProps = {
  type: string
  setCheckbox?: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>
}

export default function FilterTitle({
  type,
  setCheckbox,
}: FilterTitleProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const setIsExpanded = useFilterTitleStore((state) => state.setExpandedComponent)
  const unsetIsExpanded = useFilterTitleStore((state) => state.unsetExpandedComponent)
  const clearedLink = useClearTitle(type)
  const searchParamos = useSearchParams()

  const handleToggle = () => {
    isExpanded ? unsetIsExpanded(type) : setIsExpanded(type)
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
              setCheckbox!(prevCheckbox => ({
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
