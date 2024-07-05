"use client"
import { useFilterTitleStore } from "@/state/client/filterState"
import { albert_700 } from "@/utils/fonts";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type FilterTitleProps = {
  type: string
}

export default function FilterTitle({
  type,
}: FilterTitleProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const setIsExpanded = useFilterTitleStore((state) => state.setExpandedFilter)
  const unsetIsExpanded = useFilterTitleStore((state) => state.unsetExpandedFilter)

  const handleToggle = () => {
    isExpanded ? unsetIsExpanded(type) : setIsExpanded(type)
  }

  return (
    <div className="">

      <h3
        className={`flex cursor-pointer select-none justify-between gap-4 sm:text-[19px] xl:text-[0.875rem] whitespace-nowrap sm:w-full xl:w-[300px] ${albert_700.className}`}
        onClick={handleToggle}>
        {type}
        {isExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}
      </h3>

    </div>
  )
}
