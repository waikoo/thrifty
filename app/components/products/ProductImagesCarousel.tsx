"use client"
import { useEffect, useState } from "react"
import Image from 'next/image'

import { RxCross2 } from "react-icons/rx"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { ProductItemType } from "@/types/productItem"
import Portal from "@/app/components/generic/Portal"


type ProductImagesCarouselProps = {
  matchedProduct: ProductItemType
  setShowCarousel: React.Dispatch<React.SetStateAction<boolean>>
  startIndex: number
}

export default function ProductImagesCarousel({ matchedProduct, setShowCarousel, startIndex }: ProductImagesCarouselProps) {
  const [isZoomedIn, setIsZoomedIn] = useState(false)
  const cursor = isZoomedIn ? 'cursor-zoom-out' : 'cursor-zoom-in'
  const zoom = isZoomedIn ? 'transform scale-150' : 'transform scale-100'

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <Portal>
      <div className="fixed h-screen w-screen z-[100] bg-t_white">
        <div className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setShowCarousel(false)}>
          <RxCross2 color="black" size={30} />
        </div>


        <Carousel className="mx-auto sm:w-[94%]"
          opts={{ startIndex: startIndex, loop: true }}
        >
          <CarouselContent className="">

            {matchedProduct.img_url.map((img_src, i) => (
              <CarouselItem
                key={`single-product-img-${img_src}`}
                className={`${zoom}`}
              >
                <div className="w-full mx-auto">
                  <img
                    src={img_src}
                    alt={`${matchedProduct.color} ${matchedProduct.brand} ${matchedProduct.type}`}
                    className={`h-screen w-auto block mx-auto ${cursor}`}
                    onClick={() => setIsZoomedIn(!isZoomedIn)}
                  />
                </div>

              </CarouselItem>
            ))}

          </CarouselContent>

          <CarouselPrevious variant={'ghost'} />
          <CarouselNext variant={'ghost'} />

        </Carousel>

      </div>
    </Portal>
  )
}

