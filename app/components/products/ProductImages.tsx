import Image from "next/image"

import { ProductItemType } from "@/types/productItem"

type ProductImagesProps = {
  matchedProduct: ProductItemType
}

export default function ProductImages({ matchedProduct }: ProductImagesProps) {
  return (
    <div className="w-1/2 object-contain">
      <Image className="block" src={matchedProduct.img_url[0]} alt={'product-image'} width={100} height={100} />
    </div>
  )
}
