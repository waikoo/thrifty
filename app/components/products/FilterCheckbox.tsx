"use client"
import { Category } from "@/types/home"
import { useState } from "react"
import { FilterTitle } from "."

type FilterCheckboxProps = {
  type: string
  elements: string[]
  category?: Category['category']
}

export default function FilterCheckbox(props: FilterCheckboxProps) {
  const { type, elements } = props
  let category
  if (props.category) category = props.category

  const [checkedItems, setCheckedItems] = useState<string[]>([category || ""])
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    if (checked) {
      setCheckedItems((prevCheckedItems) =>
        [...prevCheckedItems, value])
    } else {
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== value))
    }
  }

  const handleToggle = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded)
  }

  return (
    <div>
      <FilterTitle
        type={type}
        handleToggle={handleToggle}
        uncheckItems={setCheckedItems}
        isExpanded={isExpanded}
      />

      {isExpanded && (
        <div className="flex flex-col gap-2 pl-8 pt-4">
          {elements.map((element, i) => {
            const isChecked = checkedItems.includes(element.toLowerCase())

            return (
              <label
                htmlFor={`${type.toLowerCase()}-${i}`}
                className="flex select-none gap-2 text-[0.75rem]"
                key={`${type.toLowerCase()}-${i}`}>
                <input
                  type="checkbox"
                  id={`${type.toLowerCase()}-${i}`}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  value={element.toLowerCase()}
                  className="form-checkbox border-grey checked:bg-darkgrey checked:border-darkgrey h-4 w-4 cursor-pointer appearance-none border bg-white outline-[0.1rem] outline-white ring-2 ring-white checked:border-[0.1rem] checked:outline-[0.2rem] checked:outline-white"
                />
                {element}
              </label>
            )
          })}</div>
      )}
    </div>
  )
}
