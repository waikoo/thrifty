import { FiShare2 } from "react-icons/fi"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import { RxCross1 } from "react-icons/rx"

import BigMustardButton from "@/app/components/generic/BigMustardButton"
import { ProductItemType } from "@/types/productItem"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { useCartStore } from "@/state/client/cartState"
import IconFavorite from "../navigation/icons/IconFavorite"

type CartItemControlsProps = {
  product: ProductItemType
}

export default function CartItemControls({ product }: CartItemControlsProps) {
  const { favorites, toggleFavorite, addToFavorites, removeFromFavorites } = useFavoriteStore()
  const { removeFromCart } = useCartStore()

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

  return (
    <section className="flex flex-col justify-start gap-3 px-4 mt-3">
      <div title="Share">
        <BigMustardButton className="p-[14px]">
          <FiShare2 size={20} />
        </BigMustardButton>
      </div>

      <div onClick={toggleItemInFavorites} title="Toggle Favorite">
        <BigMustardButton className="p-[14px]">
          {!favorites.includes(product.uuid)
            ? <IconFavorite stroke={'black'} fill={false} width={'20'} />
            : <IconFavorite stroke={'black'} fill={true} width={'20'} />}
        </BigMustardButton>
      </div>

      <div onClick={removeCartItem} title="Remove">
        <BigMustardButton className="p-[14px]">
          <RxCross1 size={20} />
        </BigMustardButton>
      </div>
    </section>
  )
}

