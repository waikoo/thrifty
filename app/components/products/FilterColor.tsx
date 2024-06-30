"use client"
import { FilterSearch, FilterTitle } from "."
import { useFilterSearch } from "../hooks"
import { useFilterTitleStore } from "@/state/client/filterState"
import FilterColorItem from "./FilterColorItem"

type FilterColorProps = {
  type: string
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const { setSearchValue, filteredItems } = useFilterSearch(colors)

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="">

          <FilterSearch setSearchValue={setSearchValue} type={type} />

          <div className="grid cursor-pointer select-none grid-cols-2 gap-4 pt-4">

            {filteredItems.map((color, i) => (
              <FilterColorItem
                key={`filterColor-${i}`}
                color={color}
                type={type}
              />
            ))}

          </div>
        </div>
      )}
    </div>
  )
}
