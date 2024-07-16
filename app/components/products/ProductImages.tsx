"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

import { ProductItemType } from "@/types/productItem"
import ProductImagesCarousel from "@/app/components/products/ProductImagesCarousel"

type ProductImagesProps = {
  matchedProduct: ProductItemType
}

export default function ProductImages({ matchedProduct }: ProductImagesProps) {
  const [showCarousel, setShowCarousel] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const onClickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    setStartIndex(Number(target.dataset.index))
    setShowCarousel(true)
  }

  return (
    <div className="grid grid-cols-2 gap-[3px] w-[75%]">

      {matchedProduct.img_url.map((img: string, index: number) => (
        <div
          className="cursor-pointer focus:outline-rose-50"
          key={`productImages-${index}`}>
          <Image
            className="block aspect-square w-full h-full object-cover object-bottom"
            src={img}
            alt={`${matchedProduct.color} ${matchedProduct.brand} ${matchedProduct.type}`} width={100}
            height={100}
            onClick={onClickHandler}
            data-index={index}
            priority={true} />
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
