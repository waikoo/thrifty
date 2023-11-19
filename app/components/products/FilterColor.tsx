"use client"
import { usePathname } from "next/navigation"
import { FilterSearch, FilterTitle } from "."
import { useClearTitle, useFilterSearch } from "../hooks"
import getLangAndCategory from "@/utils/getLangAndCategory"
import { useFilterTitleStore } from "@/state/uiState"

type FilterColorProps = {
  type: string
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const { setSearchValue, filteredItems } = useFilterSearch(colors)
  const clearedLink = useClearTitle(type)

  const pathname = usePathname()
  const { lang, category } = getLangAndCategory(pathname)

  return (
    <div>
      <FilterTitle
        type={type}
        lang={lang}
        category={category}
        clearedLink={clearedLink}
      />

      {isExpanded && (
        <div className="px-8">

          <FilterSearch setSearchValue={setSearchValue} />

          <div className="grid cursor-pointer select-none grid-cols-2 gap-4 pt-4">
            {filteredItems.map((color, i) => {
              // const colorOnClick = checkedItems.includes(color) ? 'text-bkg bg-content' : 'bg-bkg text-content'
              const rectColor = `bg-${color.toLowerCase()}`

              return (
                <div className={`flex items-center gap-2`} // coloronclick was here
                  // onClick={handleItemChange}
                  key={`filterColor-${i}`}
                >
                  <div className={`h-8 w-8 ${rectColor}`}></div>
                  <span>{color}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
