"use client"
import { FilterTitle } from "@/app/components/products"
import { useFilterSearch } from "@/app/components/hooks"
import { useFilterTitleStore } from "@/state/client/filterState"
import FilterColorItem from "@/app/components/products/FilterColorItem"

type FilterColorProps = {
  type: string
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const { filteredItems } = useFilterSearch(colors)

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="">

          <div className="sm:flex sm:flex-wrap xl:grid xl:grid-cols-2 cursor-pointer select-none gap-4 pt-4">

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
