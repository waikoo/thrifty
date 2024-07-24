"use client"
import { FiShare2 } from "react-icons/fi"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { RxCross1 } from "react-icons/rx"

import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { EURO } from "@/app/components/data/orderSummary"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { useCartStore, useSelectedCartStore } from "@/state/client/cartState"
import BigMustardButton from "@/app/components/generic/BigMustardButton"
import { albert_500, albert_600 } from "@/utils/fonts"

type CartItemType = {
  product: ProductItemType
}

export default function CartItem({ product }: CartItemType) {
  const { removeFromCart } = useCartStore()
  const { selected, areAllSelected, toggleSelected } = useSelectedCartStore()
  const { favorites, toggleFavorite, addToFavorites, removeFromFavorites } = useFavoriteStore()

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

  const removeItemFromFavorites = () => {
    removeFromFavorites(product.uuid)

    const stringifiedFavorites = localStorage.getItem('favorites')
    if (stringifiedFavorites) {
      const favorites = JSON.parse(stringifiedFavorites)
      const newFavorites = favorites.filter((uuid: string) => uuid !== product.uuid)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  }

  const toggleItemInFavorites = () => {
    toggleFavorite(product.uuid)

    const stringifiedFavorites = localStorage.getItem('favorites')
    if (stringifiedFavorites) {
      const favorites = JSON.parse(stringifiedFavorites)
      if (favorites.includes(product.uuid)) {
        removeItemFromFavorites()
      } else {
        addItemToFavorites()
      }
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
    <div className="flex gap-2">
      <input className="col-start-1 col-end-2 row-span-4 self-center"
        type="checkbox"
        checked={selected.includes(product.uuid) || false}
        onChange={toggleSelectedItem}
      />

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

          <section className="flex justify-evenly px-4">
            <div title="Share">
              <BigMustardButton className="p-4">
                <FiShare2 size={25} />
              </BigMustardButton>
            </div>

            <div onClick={toggleItemInFavorites} title="Toggle Favorite">
              <BigMustardButton className="p-4">
                {!favorites.includes(product.uuid)
                  ? <IoMdHeartEmpty size={25} />
                  : <IoMdHeart size={25} />}
              </BigMustardButton>
            </div>

            <div onClick={removeCartItem} title="Remove">
              <BigMustardButton className="p-4">
                <RxCross1 size={25} />
              </BigMustardButton>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
