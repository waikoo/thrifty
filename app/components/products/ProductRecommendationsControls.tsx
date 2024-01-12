"use client"
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { ProductItemType } from "@/types/productItem";
import ProductRecommendationsGrid from "@/app/components/products/ProductRecommendationsGrid";

export type ProductRecommendationsControlsProps = {
  products: ProductItemType[]
}

export default function ProductRecommendationsControls({ products }: ProductRecommendationsControlsProps) {
  const leftRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const handleScrolling = (e: React.MouseEvent<HTMLDivElement>) => {
    const imagesDiv = imagesRef.current;
    if (imagesDiv) {
      const imageWidth = 300
      imagesDiv.scrollTo({
        left: e.currentTarget === leftRef.current ? imagesDiv.scrollLeft - imageWidth : imagesDiv.scrollLeft + imageWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className="flex w-full items-center">
      <div ref={leftRef} onClick={handleScrolling} >
        <FiChevronLeft className="text-content cursor-pointer pr-4 text-4xl" />
      </div>

      <ProductRecommendationsGrid products={products} imagesRef={imagesRef} />

      <div onClick={handleScrolling} >
        <FiChevronRight className="text-content cursor-pointer pl-4 text-4xl" />
      </div>

    </div>
  )
}
