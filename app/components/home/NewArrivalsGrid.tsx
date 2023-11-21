"use client"
import Image from 'next/image'
import { ProductItemType } from "@/types/productItem"

type NewArrivalsGridProps = {
  data: ProductItemType[]
}

export default function NewArrivalsGrid({ data }: NewArrivalsGridProps) {

  return (
    <div className="flex w-full gap-[0.313rem]">
      {data?.map((product) => (
        <div className="w-[20%]" key={product.uuid}>
          <Image
            src={product.img_url[0]}
            alt={product.type}
            width={100}
            height={100}
            className="w-full select-none" />
        </div>
      ))}
    </div>
  )
}
