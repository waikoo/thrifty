"use client"
import { useState } from "react"
import { IconSearch } from "../navigation/icons"

type LayoutMenuItemProps = {
}

export default function LayoutSearchId({ }: LayoutMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`flex items-end gap-3 cursor-pointer hover:text-bkg hover:bg-content`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconSearch isHovered={isHovered} />
      <span className={`self-center`}>SEARCH ID</span>
    </div>
  )
}

