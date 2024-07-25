"use client"
import { useState } from "react"

import { ProductItemType } from "@/types/productItem"
import ProductImagesCarousel from "@/app/components/products/ProductImagesCarousel"

type ProductImagesProps = {
  matchedProduct: ProductItemType
  className: string
}

export default function ProductImages({ matchedProduct, className }: ProductImagesProps) {
  const [showCarousel, setShowCarousel] = useState(false)
  const [startIndex, setStartIndex] = useState(0)
  const gridCols = matchedProduct.img_url.length > 1 ? "grid-cols-2" : "grid-cols-1"

  const onClickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    setStartIndex(Number(target.dataset.index))
    setShowCarousel(true)
  }

  return (
    <div className={`${className} ${gridCols} gap-[3px] w-[75%]`}>

      {matchedProduct.img_url.map((img: string, index: number) => (
        <div
          className="cursor-pointer focus:outline-rose-50"
          key={`productImages-${index}`}>
          <img
            className="block aspect-square w-full h-full object-cover object-bottom"
            src={img}
            alt={`${matchedProduct.color} ${matchedProduct.brand} ${matchedProduct.type}`} width={100}
            onClick={onClickHandler}
            data-index={index}
          />
        </div>
      ))}

      {showCarousel && (
        <ProductImagesCarousel
          matchedProduct={matchedProduct}
          setShowCarousel={setShowCarousel}
          startIndex={startIndex}
        />)
      }
    </div>
  )
}
