import { useState } from "react"

export default function useFilterChecking() {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

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



  return {
    checkedItems,
    setCheckedItems,
    handleItemChange,
    handleCheckboxChange
  }
}
