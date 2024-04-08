"use client"
import { useFilterTitleStore } from "@/state/client/filterState"
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
        className="flex w-full cursor-pointer select-none justify-between gap-4 text-[0.875rem] font-bold"
        onClick={handleToggle}>
        {type}
        {isExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}
      </h3>

    </div>
  )
}
