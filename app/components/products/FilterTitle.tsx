"use client"
import { useFilterTitleStore } from "@/state/uiState"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type FilterTitleProps = {
  type: string
}

export default function FilterTitle({
  type,
}: FilterTitleProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const setIsExpanded = useFilterTitleStore((state) => state.setExpandedComponent)
  const unsetIsExpanded = useFilterTitleStore((state) => state.unsetExpandedComponent)

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
