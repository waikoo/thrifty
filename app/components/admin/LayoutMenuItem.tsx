"use client"
import { useState } from "react"

type LayoutMenuItemProps = {
  LayoutIcon: React.ComponentType<{ isHovered?: boolean }>
  text: string
}

export default function LayoutMenuItem({ LayoutIcon, text }: LayoutMenuItemProps) {
  const center = text === 'ADD NEW' ? 'self-center' : ''
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className={`flex ${center} items-end gap-3 cursor-pointer hover:text-bkg hover:bg-content`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LayoutIcon isHovered={isHovered} />
      <span className={`self-center`}>{text}</span>
    </div>
  )
}
