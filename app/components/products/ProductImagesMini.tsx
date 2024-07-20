"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { ProductItemType } from "@/types/productItem"
import ProductSingleImage from "@/app/components/products/ProductSingleImage"
import { useState } from "react"
import ProductImagesCarousel from "./ProductImagesCarousel"

type ProductImagesMiniProps = {
  className: string
  matchedProduct: ProductItemType
}

export default function ProductImagesMini({ className, matchedProduct }: ProductImagesMiniProps) {
  const [showCarousel, setShowCarousel] = useState(false)

  const [startIndex, setStartIndex] = useState(0)

  const onClickHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement
    setStartIndex(Number(target.dataset.index))
    setShowCarousel(true)
  }

  return (
    <div className={`${className} w-screen`}>

      <Carousel className="mx-auto w-full overflow-hidden"
        opts={{ loop: true }}
      >
        <CarouselContent className="">

          {matchedProduct.img_url.map((img_src, i) => (
            <CarouselItem
              key={`single-product-img-${img_src}`}
              className={`mx-auto`}
            >
              <div className="w-full mx-auto"
              >
                <img
                  onClick={onClickHandler}
                  data-index={i}
                  src={img_src}
                  alt={`${matchedProduct.color} ${matchedProduct.brand} ${matchedProduct.type}`}
                  className={`h-auto w-screen block mx-auto aspect-square object-cover object-bottom`}
                />
              </div>

            </CarouselItem>
          ))}

        </CarouselContent>

        <CarouselPrevious variant={'ghost'} />
        <CarouselNext variant={'ghost'} />

      </Carousel>

      {showCarousel && (
        <ProductImagesCarousel
          matchedProduct={matchedProduct}
          setShowCarousel={setShowCarousel}
          startIndex={startIndex}
        />)}
    </div>
  )
}

