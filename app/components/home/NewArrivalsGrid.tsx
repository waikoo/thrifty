"use client"
import Image from 'next/image'
import { ProductItemType } from "@/types/productItem"

type NewArrivalsGridProps = {
  data: ProductItemType[]
  imagesRef: React.RefObject<HTMLDivElement>
}

export default function NewArrivalsGrid({ data, imagesRef }: NewArrivalsGridProps) {

  return (
    <div className="grid h-auto w-full snap-x snap-mandatory auto-cols-auto grid-flow-col gap-[0.313rem] overflow-x-auto overscroll-x-contain"
      ref={imagesRef}
    >
      {data?.map((product) => (
        <div className="w-[200px]" key={product.uuid}>
          <Image
            src={product.img_url[0]}
            alt={product.type}
            width={200}
            height={100}
            draggable={false}
            className="block h-auto max-w-full select-none snap-start" />

        </div>
      ))}
    </div>
  )
}
