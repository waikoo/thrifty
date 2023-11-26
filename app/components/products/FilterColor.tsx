"use client"
import { usePathname, useSearchParams } from "next/navigation"
import { FilterSearch, FilterTitle } from "."
import { useClearTitle, useFilterSearch } from "../hooks"
import getLangAndCategory from "@/utils/getLangAndCategory"
import { useFilterTitleStore } from "@/state/uiState"
import FilterColorItem from "./FilterColorItem"

type FilterColorProps = {
  type: string
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  // TODO: try details-summary-content
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const { setSearchValue, filteredItems } = useFilterSearch(colors)
  // TODO: move to FilterTitle:
  const clearedLink = useClearTitle(type)
  const pathname = usePathname()
  const { lang, category } = getLangAndCategory(pathname)
  const searchParamos = useSearchParams()

  return (
    <div>
      <FilterTitle
        type={type}
        lang={lang}
        category={category}
        clearedLink={clearedLink}
        searchParamos={searchParamos}
      />

      {isExpanded && (
        <div className="px-8">

          <FilterSearch setSearchValue={setSearchValue} />

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
