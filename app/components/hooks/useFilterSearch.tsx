"use client"
import { useState } from "react"

export default function useFilterSearch(items: string[]) {
  const [searchValue, setSearchValue] = useState("")

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchValue.toLowerCase())
  )

  return {
    setSearchValue,
    filteredItems
  }
}
