"use client"
import Image from "next/image"

import { useCartStore, useFavoriteStore, useSelectedCartStore } from "@/state/uiState"
import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import IconClock from "@/app/components/cart/icons/IconClock"
import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "@/app/components/cart/icons/IconHeart"
import { EURO } from "@/app/components/data/orderSummary"

type CartItemType = {
  product: ProductItemType
}

export default function CartItem({ product }: CartItemType) {
  const { removeFromCart } = useCartStore()
  const { selected, areAllSelected, toggleSelected } = useSelectedCartStore()
  const { addToFavorites } = useFavoriteStore()

  const addItemToFavorites = () => {
    addToFavorites(product.uuid)

    const stringifiedFavorites = localStorage.getItem('favorites')

    if (stringifiedFavorites) {
      const favorites = JSON.parse(stringifiedFavorites)
      if (favorites.includes(product.uuid)) return
      const newFavorites = [...favorites, product.uuid]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  }

  const removeCartItem = () => {
    removeFromCart(product.uuid)

    const stringifiedCart = localStorage.getItem('cart')
    if (stringifiedCart) {
      const cart = JSON.parse(stringifiedCart)
      const newCart = cart.filter((uuid: string) => uuid !== product.uuid)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  const toggleSelectedItem = () => {
    toggleSelected(product.uuid)
  }

  return (
    <div className="grid-rows-[auto, auto, auto, auto] grid grid-cols-[auto,auto,300px,auto,auto,auto] items-center gap-4 py-4">
      <input className="col-start-1 col-end-2 row-span-4 self-center" type="checkbox" checked={selected.includes(product.uuid) || false} onChange={toggleSelectedItem} />
      <Image className="col-start-2 col-end-3 row-span-4" src={product.img_url[0]} alt="cart image" width={100} height={100} priority={true} />
      <span className="col-start-3 col-end-4 row-start-1 row-end-2 text-[0.8125rem] font-medium">{`${capitalize(product.brand)} ${capitalize(product.type)}`}</span>
      <span className="col-start-3 col-end-4 row-start-2 row-end-3 text-[0.8125rem] font-semibold">{product.size}</span>
      <span className="col-start-3 col-end-4 row-start-4 row-end-5 text-[0.875rem] font-semibold">{EURO}{product.price}</span>

      <IconShare className="col-start-4 col-end-5 row-start-1 row-end-2 cursor-pointer" />
      <div onClick={addItemToFavorites} title="Add to Favorites">
        <IconHeart className="col-start-5 col-end-6 row-start-1 row-end-2 cursor-pointer" />
      </div>
      <div onClick={removeCartItem} title="Delete">
        <IconDelete className="col-start-6 col-end-7 row-start-1 row-end-2 cursor-pointer" />
      </div>

      <div className="row col-start-4 col-end-7 row-start-4 row-end-5 flex items-center gap-2 justify-self-center">
        <IconClock />
        <span className="text-[0.6875rem] font-semibold"> 30 Min. </span>
      </div>
    </div>
  )
}
