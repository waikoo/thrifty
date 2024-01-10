"use client"
import { useRef } from "react";

import { ProductItemType } from "@/types/productItem";
import ProductRecommendationsGrid from "@/app/components/products/ProductRecommendationsGrid";

export type ProductRecommendationsControlsProps = {
  products: ProductItemType[]
}

export default function ProductRecommendationsControls({ products }: ProductRecommendationsControlsProps) {
  const leftRef = useRef<HTMLButtonElement>(null)
  const imagesRef = useRef<HTMLDivElement>(null)

  const handleScrolling = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    <div className="flex w-full">
      <button onClick={handleScrolling} ref={leftRef}>Previous</button>
      <ProductRecommendationsGrid products={products} imagesRef={imagesRef} />
      <button onClick={handleScrolling}>Next</button>
    </div>
  )
}
