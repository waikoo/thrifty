'use client'
import { useEffect, useState } from 'react'

import { ProductItemType } from '@/types/productItem'
import ProductAddToCart from '@/app/components/products/ProductAddToCart'
import {
  useFavoriteStore,
  useSelectedFavoritesStore,
} from '@/state/client/favoriteState'
import { useCartStore } from '@/state/client/cartState'
import CartItemStats from '@/app/components/cart/CartItemStats'
import FavoritesItemControls from '@/app/components/favorites/FavoritesItemControls'
import CartItemImage from '@/app/components/cart/CartItemImage'
import ProductToggleFavorite from '@/app/components/products/ProductToggleFavorite'

type CartItemType = {
  product: ProductItemType
}

export default function FavoritesItem({ product }: CartItemType) {
  const [text, setText] = useState('ADD TO CART')
  const { cart } = useCartStore()
  const { favorites } = useFavoriteStore()
  const { selectedFavorites, toggleSelectedFavorites, toggleAreAllFavoritesSelected, areAllFavoritesSelected } = useSelectedFavoritesStore()
  const [isChecked, setIsChecked] = useState(selectedFavorites.includes(product.uuid))
  const checkedStyle = isChecked ? "border-t_mustard" : 'border-white hover:border-[#e3e3e3] '

  useEffect(() => {
    if (cart.includes(product.uuid)) {
      setText('ADDED TO CART')
    }
  }, [cart, favorites])

  useEffect(() => {
    setIsChecked(selectedFavorites.includes(product.uuid))
  }, [areAllFavoritesSelected])

  useEffect(() => {
    if (!isChecked) {
      if (areAllFavoritesSelected) {
        toggleAreAllFavoritesSelected(false)
      }
    }
  }, [isChecked])

  const toggleSelectedItem = () => {
    toggleSelectedFavorites(product.uuid)
    setIsChecked(!isChecked)
  }

  return (
    <label className="flex gap-2" htmlFor="favorite">
      <input
        className="self-center"
        type="checkbox"
        id="favorite"
        checked={isChecked || false}
        onChange={toggleSelectedItem}
      />

      <div className="flex">

        <div className={`flex flex-col gap-2 border-[2px] rounded-[20px] hover:border-[2px] hover:rounded-[20px] p-[10px] cursor-pointer relative ${checkedStyle}`}
          onClick={toggleSelectedItem}
        >
          <CartItemImage product={product} /> {/* reused from cart */}
          <ProductToggleFavorite uuid={product.uuid} />

          <CartItemStats product={product} /> {/* reused from cart */}

          <div className="flex items-center gap-2 justify-self-center">
            <ProductAddToCart
              uuid={product.uuid}
              className="p-2 border-[#3e3e3e]"
              bgColor="xl:hover:bg-[#e2e2e2]"
              textColor="text-t_black"
            >
              {text}
            </ProductAddToCart>
          </div>
        </div>

        <FavoritesItemControls product={product} />
      </div>
    </label>
  )
}
