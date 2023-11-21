"use client"
import { ProductItemType } from "@/types/productItem"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import { NewArrivalsGrid } from './'
import { Category } from "@/types/home";

type NewArrivalsControlsProps = {
  data: ProductItemType[]
  category: Category['category']
}

export default function NewArrivalsControls({ data, category }: NewArrivalsControlsProps) {
  const leftRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const handleScrolling = (e: React.MouseEvent<HTMLDivElement>) => {
    const imagesDiv = imagesRef.current;
    if (imagesDiv) {
      const imageWidth = 200
      imagesDiv.scrollTo({
        left: e.currentTarget === leftRef.current ? imagesDiv.scrollLeft - imageWidth : imagesDiv.scrollLeft + imageWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="flex items-center">
      <div
        ref={leftRef}
        onClick={handleScrolling}
      >
        <FiChevronLeft
          className="text-bkg cursor-pointer pr-4 text-4xl"
        />
      </div>

      <NewArrivalsGrid
        data={data}
        imagesRef={imagesRef}
      />

      <div
        onClick={handleScrolling}
      >
        <FiChevronRight
          className="text-bkg cursor-pointer pl-4 text-4xl"
        />
      </div>
    </div>

  )
}
