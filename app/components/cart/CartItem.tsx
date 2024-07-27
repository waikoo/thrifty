"use client"

import { useState } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { EURO } from "@/app/components/data/orderSummary"
import { useSelectedCartStore } from "@/state/client/cartState"
import { albert_500, albert_600 } from "@/utils/fonts"
import CartItemControls from "@/app/components/cart/CartItemControls"
import getLangAndGender from "@/utils/getLangAndGender"

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
  const { lang, gender } = getLangAndGender(usePathname())

  return (
    <label className="flex gap-2" htmlFor="product">
      <input className="col-start-1 col-end-2 row-span-4 self-center"
        type="checkbox"
        id="product"
        checked={isChecked || false}
        onChange={toggleSelectedItem}
      />

      <div className="flex">
        <div className={`flex flex-col gap-2 border-[2px] rounded-[20px] hover:border-[2px] hover:rounded-[20px] p-[10px] cursor-pointer ${checkedStyle}`}>
          <div className="min-w-[142px]">
            <Link href={`/${lang}/${gender}/products/${product.uuid}`}>
              <img className="rounded-[10px] w-full h-full object-cover object-bottom block aspect-square"
                src={product.img_url[0]}
                alt="cart image"
              />
            </Link>
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
    </label>
  )
}
