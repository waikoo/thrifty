"use client"
import { FilterSearch, FilterTitle } from "."
import { useFilterChecking, useFilterSearch, useFilterTitle } from "../hooks"

type FilterColorProps = {
  type: 'COLOR'
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  const { isExpanded, setIsExpanded } = useFilterTitle()
  const { setSearchValue, filteredItems } = useFilterSearch(colors)
  const { checkedItems, setCheckedItems, handleItemChange } = useFilterChecking()

  return (
    <div>
      <FilterTitle
        type={type}
        setIsExpanded={setIsExpanded}
        uncheckItems={setCheckedItems}
        isExpanded={isExpanded}
      />

      {isExpanded && (
        <div className="px-8">

          <FilterSearch setSearchValue={setSearchValue} />

          <div className="grid cursor-pointer select-none grid-cols-2 gap-4 pt-4">
            {filteredItems.map((color, i) => {
              const colorOnClick = checkedItems.includes(color) ? 'text-bkg bg-content' : 'bg-bkg text-content'
              const rectColor = `bg-${color.toLowerCase()}`

              return (
                <div className={`flex items-center gap-2 ${colorOnClick}`}
                  onClick={handleItemChange}
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
