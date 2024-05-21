"use client"
import { albert_600, albert_900 } from "@/utils/fonts"
import { useState } from "react"

type AddressControlItemProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export default function AddressControlItem({ children, onClick, className }: AddressControlItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const boldOnHover = isHovered ? albert_900.className : ''

  return (
    <span
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`whitespace-nowrap ${className} ${boldOnHover} ${albert_600.className}`}
    >{children}</span>
  )
}

