"use client"
import { ProductItemType } from "@/types/productItem"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import { NewArrivalsGrid } from './'
import { Category } from "@/types/home";

type NewArrivalsControlsProps = {
  data: ProductItemType[]
  category: Category['category']
}

export default function NewArrivalsControls({ data, category }: NewArrivalsControlsProps) {
  const [carouselPosition, setCarouselPosition] = useState(0)

  const handlePrev = () => {
    if (carouselPosition > 0) {
      setCarouselPosition(carouselPosition - 1)
    }
  }

  const handleNext = () => {
    if (carouselPosition < (data.length - 6)) {
      setCarouselPosition(carouselPosition + 1)
    }
  }
  return (
    <div className="flex w-full items-center">
      <FiChevronLeft
        className="text-bkg cursor-pointer pr-4 text-4xl"
        onClick={handlePrev}
      />

      <NewArrivalsGrid
        data={data.slice(carouselPosition, carouselPosition + 6)}
      />

      <FiChevronRight
        className="text-bkg cursor-pointer pl-4 text-4xl"
        onClick={handleNext}
      />
    </div>

  )
}
