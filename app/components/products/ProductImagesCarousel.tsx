"use client"

import { ProductItemType } from "@/types/productItem"
import Portal from "../generic/Portal"
import { RxCross2 } from "react-icons/rx"
import { useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import Image from 'next/image'

type ProductImagesCarouselProps = {
  matchedProduct: ProductItemType
  setShowCarousel: React.Dispatch<React.SetStateAction<boolean>>
  startIndex: number
}

export default function ProductImagesCarousel({ matchedProduct, setShowCarousel, startIndex }: ProductImagesCarouselProps) {

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
                className=""
              >
                <div className="w-full mx-auto">
                  <Image
                    src={img_src}
                    alt={`${matchedProduct.color} ${matchedProduct.brand} ${matchedProduct.type}`}
                    width={100}
                    height={100}
                    className="h-screen w-auto block mx-auto"
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

