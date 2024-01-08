"use client"
import Image from "next/image"
import { useState } from "react"

import { ProductItemType } from "@/types/productItem"

type ProductImagesProps = {
  matchedProduct: ProductItemType
}

export default function ProductImages({ matchedProduct }: ProductImagesProps) {
  const [enlargedImage, setEnlargedImage] = useState(matchedProduct.img_url[0])

  return (
    <div className="flex w-1/2">

      <div className="ml-[7.5rem] w-1/3 flex-col items-center justify-between gap-2">
        {matchedProduct.img_url.map((img: string, index: number) => (
          <div className="mb-2 w-[6.55rem] cursor-pointer focus:outline-rose-50">
            <Image key={index} className="block h-full w-full" src={img} alt={'product-image'} width={100} height={100} onClick={() => setEnlargedImage(img)} />
          </div>
        ))}
      </div>

      <div className="w-2/3">
        <div className="bg-red h-auto w-[27.3rem] object-cover">
          <Image className="block h-full w-full" src={enlargedImage} alt={'product-image'} width={100} height={100} />
        </div>
      </div>

    </div>
  )
}
