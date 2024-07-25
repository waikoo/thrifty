"use client"

import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { EURO } from "@/app/components/data/orderSummary"
import { useSelectedCartStore } from "@/state/client/cartState"
import { albert_500, albert_600 } from "@/utils/fonts"
import CartItemControls from "@/app/components/cart/CartItemControls"

type CartItemType = {
  product: ProductItemType
}

export default function CartItem({ product }: CartItemType) {
  const { selected, areAllSelected, toggleSelected } = useSelectedCartStore()

  const toggleSelectedItem = () => {
    toggleSelected(product.uuid)
  }

  return (
    <div className="flex gap-2">
      <input className="col-start-1 col-end-2 row-span-4 self-center"
        type="checkbox"
        checked={selected.includes(product.uuid) || false}
        onChange={toggleSelectedItem}
      />

      <div className="flex">
        <div className="flex flex-col gap-2">
          <div className="w-[20rem] h-[20rem]">
            <img className="rounded-[10px] w-full h-full object-cover object-bottom"
              src={product.img_url[0]}
              alt="cart image"
            />
          </div>

          <div className="">
            <div className="flex justify-between">
              <span className={`text-[14px] ${albert_600.className}`}>
                {`${capitalize(product.brand)}`}
              </span>

              <span className={`text-[14px] ${albert_600.className}`}>
                {EURO}{product.price}
              </span>
            </div>

            <p className={`text-[12px] ${albert_500.className}`}>
              {product.size}
            </p>

          </div>
        </div>

        <CartItemControls product={product} />
      </div>
    </div>
  )
}
