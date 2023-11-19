"use client"
import { usePathname } from "next/navigation"
import { FilterSearch, FilterTitle } from "."
import { useClearTitle, useFilterChecking, useFilterSearch, useFilterTitle } from "../hooks"
import getLangAndCategory from "@/utils/getLangAndCategory"

type FilterSizeProps = {
  type: 'SIZE'
  sizes: string[]
}

export default function FilterSize({ type, sizes }: FilterSizeProps) {
  const { isExpanded, setIsExpanded } = useFilterTitle()
  const { setSearchValue, filteredItems } = useFilterSearch(sizes)
  const clearedLink = useClearTitle(type)
  const pathname = usePathname()
  const { lang, category } = getLangAndCategory(pathname)

  return (
    <div>
      <FilterTitle
        type={type}
        lang={lang}
        category={category}
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        clearedLink={clearedLink}
      />

      {isExpanded && (
        <div className="px-8">

          <FilterSearch setSearchValue={setSearchValue} />

          <div className="grid cursor-pointer select-none grid-cols-4 gap-2 pt-4">
            {filteredItems.map((size, i) => {
              // const colorOnClick = checkedItems.includes(size) ? 'text-bkg bg-content' : 'bg-bkg text-content'

              return (
                <div
                  key={`sizes-${i}`}
                // className={`grid place-items-center border-[0.1rem] p-1 px-4 ${colorOnClick}`}
                // onClick={handleItemChange}
                >
                  {size}</div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
