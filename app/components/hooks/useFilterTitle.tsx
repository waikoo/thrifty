import { useState } from "react"

export default function useFilterTitle() {
  const [isExpanded, setIsExpanded] = useState(false)

  return {
    isExpanded,
    setIsExpanded
  }
}
