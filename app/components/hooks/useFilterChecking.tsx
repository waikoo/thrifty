import { Category } from "@/types/home"
import { useState } from "react"

type useFilterCheckingType = (
  category: Category['category']
) => {
  checkedItems: string[]
  setCheckedItems: React.Dispatch<React.SetStateAction<string[]>>
  handleItemChange: (e: React.MouseEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => void
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useFilterChecking(category: Category['category']): useFilterCheckingType {
  const [checkedItems, setCheckedItems] = useState<string[]>([category])

  const handleItemChange = (
    e: React.MouseEvent<HTMLDivElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { innerText } = e.currentTarget

    if (checkedItems.includes(innerText)) { // take it out
      setCheckedItems(prevCheckedItems =>
        prevCheckedItems.filter(item => item !== innerText))
    } else { // include it with all the others
      setCheckedItems(prevCheckedItems => [...prevCheckedItems, innerText])
    }
  }

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

  // FIX: checkedItems error
  return {
    checkedItems,
    setCheckedItems,
    handleItemChange,
    handleCheckboxChange
  }
}
