import Image from "next/image"
import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { EURO } from "@/app/components/data/orderSummary"

type CheckoutCartItemProps = {
  product: ProductItemType
}

export default function CheckoutCartItem({ product }: CheckoutCartItemProps) {

  return (
    <div className={`flex px-6`}>
      <Image
        src={product.img_url[0]}
        alt="cart image"
        width={100}
        height={100}
        priority={true} />

      <div className={`flex flex-col px-4`}>
        <div className="flex gap-2">
          <p>{capitalize(product.brand)}</p>
          <p>{capitalize(product.type)}</p>
        </div>
        <p>{product.size}</p>
        <p className="mt-auto">{EURO}{product.price}</p>
      </div>
    </div>
  )
}
