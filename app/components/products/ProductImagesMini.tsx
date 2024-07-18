import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

import { ProductItemType } from "@/types/productItem"

type ProductImagesMiniProps = {
  className: string
  matchedProduct: ProductItemType
}

export default function ProductImagesMini({ className, matchedProduct }: ProductImagesMiniProps) {

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
              <div className="w-full mx-auto">
                <img
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
    </div>
  )
}

