"use client"

import { useEffect, useState } from "react"

import { ProductItemType } from "@/types/productItem"
import { useSelectedCartStore } from "@/state/client/cartState"
import CartItemControls from "@/app/components/cart/CartItemControls"
import CartItemStats from "./CartItemStats"
import CartItemImage from "./CartItemImage"

type CartItemType = {
  product: ProductItemType
}

export default function CartItem({ product }: CartItemType) {
  const { selected, areAllSelected, toggleSelected } = useSelectedCartStore()
  const [isChecked, setIsChecked] = useState(selected.includes(product.uuid))
  const toggleSelectedItem = () => {
    toggleSelected(product.uuid)
    setIsChecked(!isChecked)
  }
  const checkedStyle = isChecked ? "border-t_mustard" : 'border-white hover:border-[#e3e3e3] '

  useEffect(() => {
    if (areAllSelected) {
      setIsChecked(selected.includes(product.uuid))
    } else {
      setIsChecked(false)
    }
  }, [areAllSelected])

  return (
    <label className="flex gap-2" htmlFor="product">
      <input className="self-center"
        type="checkbox"
        id="product"
        checked={isChecked || false}
        onChange={toggleSelectedItem}
      />

      <div className="flex">
        <div className={`flex flex-col gap-2 border-[2px] rounded-[20px] hover:border-[2px] hover:rounded-[20px] p-[10px] cursor-pointer ${checkedStyle}`}>
          <CartItemImage product={product} />
          <CartItemStats product={product} />
        </div>

        <CartItemControls product={product} />
      </div>
    </label>
  )
}
