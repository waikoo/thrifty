"use client"
import { useState } from "react"

import { albert_600, albert_900 } from "@/utils/fonts"
import { underline } from "@/app/components/data/universalStyles"

type AddressControlItemProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export default function AddressControlItem({ children, onClick, className }: AddressControlItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const boldOnHover = isHovered ? `${albert_900.className} ${underline}` : ''

  return (
    <span
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`whitespace-nowrap ${className} ${boldOnHover} ${albert_600.className}`}
    >{children}</span>
  )
}

