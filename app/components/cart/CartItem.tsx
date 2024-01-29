import Image from "next/image"

import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import IconClock from "@/app/components/cart/icons/IconClock"
import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "@/app/components/cart/icons/IconHeart"

type CartItemType = {
  product: ProductItemType
}

export default function CartItem({ product }: CartItemType) {

  return (
    <div className="grid-rows-[auto, auto, auto, auto] grid grid-cols-[auto,auto,1fr,auto,auto,auto] items-center gap-4 p-4">
      <input className="col-start-1 col-end-2 row-span-4 self-center" type="checkbox" />
      <Image className="col-start-2 col-end-3 row-span-4" src={product.img_url[0]} alt="cart image" width={100} height={100} priority={true} />
      <span className="col-start-3 col-end-4 row-start-1 row-end-2">{`${capitalize(product.brand)} ${capitalize(product.type)}`}</span>
      <span className="col-start-3 col-end-4 row-start-2 row-end-3">{product.size}</span>
      <span className="col-start-3 col-end-4 row-start-4 row-end-5">€{product.price}</span>

      <IconShare className="col-start-4 col-end-5 row-start-1 row-end-2 cursor-pointer" />
      <IconHeart className="col-start-5 col-end-6 row-start-1 row-end-2 cursor-pointer" />
      <IconDelete className="col-start-6 col-end-7 row-start-1 row-end-2 cursor-pointer" />

      <div className="row col-start-4 col-end-7 row-start-4 row-end-5 flex items-center gap-2 justify-self-center">
        <IconClock />
        <span> 30 Min. </span>
      </div>
    </div>
  )
}
