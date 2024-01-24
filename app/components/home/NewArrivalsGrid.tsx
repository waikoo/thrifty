"use client"
import Image from 'next/image'

import { ProductItemType } from "@/types/productItem"

type NewArrivalsGridProps = {
  products: ProductItemType[]
  imagesRef: React.RefObject<HTMLDivElement>
}

export default function NewArrivalsGrid({ products, imagesRef }: NewArrivalsGridProps) {

  return (
    <div className="scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded grid h-auto w-full snap-x snap-mandatory auto-cols-auto grid-flow-col gap-[0.313rem] overflow-x-auto overscroll-x-contain"
      ref={imagesRef}
      draggable={false}
    >
      {products?.map((product, i) => (
        <div className="w-[200px]" key={product.uuid}>
          <Image
            src={product.img_url[0]}
            alt={product.type}
            width={100}
            height={100}
            draggable={false}
            className="block aspect-square w-full select-none snap-start object-cover" />

        </div>
      ))}
    </div>
  )
}

