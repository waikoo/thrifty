"use client"
import { useUIStore } from "@/state/uiState"
import { useRef } from "react"
import CategoryKids from "./CategoryKids"
import CategoryMen from "./CategoryMen"
import CategoryWomen from "./CategoryWomen"
import CategoryImage from "./CategoryImage"

export default function CategoryMenu() {
  const { category: hoveredCategory, setShowCategoryMenu } = useUIStore()
  const divRef = useRef<HTMLDivElement | null>(null)

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // makes popup disappear on the bottom
    if (e.target === divRef.current) {
      setShowCategoryMenu(false)
    }
  }
  return (
    <section className="absolute inset-0 top-10 h-screen bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="border-darkgrey absolute inset-x-0 left-[-15rem] z-50 w-screen border-t-[0.05rem]"></div>
      <div
        className="bg-bkg min-w-screen absolute inset-x-0 z-40 mx-auto flex gap-32 overflow-y-hidden px-12 py-12"
        onMouseLeave={(e) => handleMouseLeave(e as React.MouseEvent<HTMLDivElement, MouseEvent>)}
        onMouseEnter={() => setShowCategoryMenu(true)}
        ref={divRef}
      >
        {hoveredCategory === 'men' && <CategoryMen />}
        {hoveredCategory === 'women' && <CategoryWomen />}
        {hoveredCategory === 'kids' && <CategoryKids />}

        <div className="my-auto flex flex-col gap-10">
          <CategoryImage>NEW IN</CategoryImage>
          <CategoryImage>PROMOS</CategoryImage>
        </div>
      </div >
    </section>
  )
}
