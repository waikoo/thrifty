"use client"
import { useState } from "react"
import { FiChevronDown, FiChevronUp, FiSearch } from "react-icons/fi"
import { FilterSearch } from "."

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
    console.log(innerText)

    if (checkedItems.includes(innerText)) { // take it out
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== innerText))
    } else { // include it with all the others
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, innerText])
    }
  }

  const handleToggle = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const filteredColors = colors.filter(color =>
    color.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="flex cursor-pointer select-none gap-4 text-[0.875rem] font-bold"
          onClick={handleToggle}>
          {isExpanded ? (<FiChevronUp />) : (<FiChevronDown />)}
          {type}
        </h3>
        <span
          className="cursor-pointer text-[0.75rem]"
          onClick={() => setCheckedItems([])}>
          Clear x
        </span>
      </div>

      {isExpanded && (
        <div className="px-8">
          <div className="relative flex">
            <FiSearch className="text-grey absolute left-1 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search Size"
              className="bg-bkg border-b-[0.1rem] pl-7 outline-none"
              onChange={onChangeHandler}
            />
          </div>

          <div className="grid cursor-pointer select-none grid-cols-2 gap-4 pt-4">
            {filteredColors.map((color, i) => {
              const colorOnClick = checkedItems.includes(color) ? 'text-bkg bg-content' : 'bg-bkg text-content'
              const rectColor = `bg-${color.toLowerCase()}`
              // console.log(color.toLowerCase())

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
