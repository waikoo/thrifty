import { capitalize } from "@/utils/capitalize"
import { EURO } from "@/app/components/data/orderSummary"
import { albert_500, albert_600 } from "@/utils/fonts"
import { ProductItemType } from "@/types/productItem"

type CartItemType = {
  product: ProductItemType
}

export default function CartItemStats({ product }: CartItemType) {

  return (
    <div className="">
      <div className="flex justify-between">
        <span className={`text-[13px] sm:text-[17px] xl:text-[14px] ${albert_600.className}`}>
          {`${capitalize(product.brand)}`}
        </span>

        <span className={`text-[13px]sm:text-[17px] xl:text-[14px] ${albert_600.className}`}>
          {EURO}{product.price}
        </span>
      </div>

      <p className={`text-[13px] sm:text-[17px] xl:text-[12px] ${albert_500.className}`}>
        {product.size}
      </p>

    </div>
  )
}

