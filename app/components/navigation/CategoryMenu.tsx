"use client"
import { useUIStore } from "@/state/uiState"
import { useRef } from "react"
import CategoryMen from "./CategoryMen"

export default function CategoryMenu() {
  const { showCategoryMenu, setShowCategoryMenu } = useUIStore()
  const divRef = useRef<HTMLDivElement | null>(null)

  const onMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const div = divRef.current as HTMLDivElement
    if (e.target !== div) {
      setShowCategoryMenu(false)
    }
  }
  return (
    <div
      className="bg-bkg border-content min-w-screen absolute inset-x-0 mx-auto flex gap-32 border-t-[0.1rem] px-24 py-12"
      onMouseLeave={(e) => onMouseOut(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
      onMouseEnter={() => setShowCategoryMenu(true)}
      ref={divRef}
    >
      <CategoryMen />
    </div >
  )
}
