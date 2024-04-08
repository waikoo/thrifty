"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import ProductAddToCart from "@/app/components/products/ProductAddToCart"
import { EURO } from "@/app/components/data/orderSummary"
import { useFavoriteStore, useSelectedFavoritesStore } from "@/state/client/favoriteState"
import { useCartStore } from "@/state/client/cartState"

type CartItemType = {
  product: ProductItemType
}

export default function FavoritesItem({ product }: CartItemType) {
  const [text, setText] = useState('ADD TO CART')
  const { cart } = useCartStore()
  const { favorites, removeFromFavorites } = useFavoriteStore()
  const { selectedFavorites, toggleSelectedFavorites } = useSelectedFavoritesStore()

  useEffect(() => {
    if (cart.includes(product.uuid)) {
      setText('ADDED TO CART')
    }
  }, [cart, favorites])

  const removeFavoritesItem = () => {
    removeFromFavorites(product.uuid)

    const newFavorites = favorites.filter((uuid: string) => uuid !== product.uuid)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const toggleSelectedItem = () => {
    toggleSelectedFavorites(product.uuid)
  }

  return (
    <div className="grid-rows-[auto, auto, auto, auto] grid grid-cols-[auto,auto,300px,auto,auto,auto] items-center gap-4 py-4">
      <input
        className="col-start-1 col-end-2 row-span-4 self-center"
        type="checkbox"
        checked={selectedFavorites.includes(product.uuid) || false}
        onChange={toggleSelectedItem}
      />
      <Image className="col-start-2 col-end-3 row-span-4" src={product.img_url[0]} alt="cart image" width={100} height={100} priority={true} />
      <span className="col-start-3 col-end-4 row-start-1 row-end-2 text-[0.8125rem] font-medium">{`${capitalize(product.brand)} ${capitalize(product.type)}`}</span>
      <span className="col-start-3 col-end-4 row-start-2 row-end-3 text-[0.8125rem] font-semibold">{product.size}</span>
      <span className="col-start-3 col-end-4 row-start-4 row-end-5 text-[0.875rem] font-semibold">{EURO}{product.price}</span>

      <div className="col-start-4 col-end-7 row-start-1 row-end-2 flex justify-end gap-4">
        <div title="Share">
          <IconShare className="col-start-5 col-end-6 row-start-1 row-end-2 cursor-pointer" />
        </div>

        <div onClick={removeFavoritesItem} title="Delete">
          <IconDelete className="col-start-6 col-end-7 row-start-1 row-end-2 cursor-pointer" />
        </div>
      </div>

      <div className="row col-start-4 col-end-7 row-start-4 row-end-5 flex items-center gap-2 justify-self-center">
        <ProductAddToCart uuid={product.uuid} className="p-4">{text}</ProductAddToCart>
      </div>
    </div>
  )
}
