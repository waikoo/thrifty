"use client"
import { useState } from "react"
import { FilterSearch, FilterTitle } from "."

type FilterColorProps = {
  type: 'COLOR'
  colors: string[]
}

export default function FilterColor({ type, colors }: FilterColorProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [checkedItems, setCheckedItems] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState("")

  const handleColorChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerText } = e.currentTarget

    if (checkedItems.includes(innerText)) { // take it out
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== innerText))
    } else { // include it with all the others
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, innerText])
    }
  }

  const filteredColors = colors.filter(color =>
    color.toLowerCase().includes(searchValue.toLowerCase()))

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
            {filteredColors.map((color, i) => {
              const colorOnClick = checkedItems.includes(color) ? 'text-bkg bg-content' : 'bg-bkg text-content'
              const rectColor = `bg-${color.toLowerCase()}`

              return (
                <div className={`flex items-center gap-2 ${colorOnClick}`}
                  onClick={handleColorChange}
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
