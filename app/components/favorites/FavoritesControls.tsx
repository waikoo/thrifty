import React, { useEffect } from 'react'

import IconShare from '@/app/components/cart/icons/IconShare'
import IconDelete from '@/app/components/cart/icons/IconDelete'
import IconFadedCart from '@/app/components/favorites/IconFadedCart'
import { useFavoriteStore, useSelectedFavoritesStore } from '@/state/client/favoriteState'
import { useCartStore } from '@/state/client/cartState'

export default function FavoritesControls() {
  const { selectedFavorites, areAllFavoritesSelected, toggleAreAllFavoritesSelected, setAllSelectedFavoritesItemsTo, emptySelectedFavorites } = useSelectedFavoritesStore()
  const { favorites, removeSelectedFromFavorites, emptyFavorites } = useFavoriteStore()
  const { addSelectedFavoritesToCart } = useCartStore()

  useEffect(() => {
    setAllSelectedFavoritesItemsTo(areAllFavoritesSelected ? favorites : [])
  }, [areAllFavoritesSelected])

  const deleteSelectedFromFavorites = () => {
    if (areAllFavoritesSelected) {
      emptyFavorites()
      emptySelectedFavorites()
      localStorage.setItem('favorites', '[]')
      return
    }
    removeSelectedFromFavorites(selectedFavorites)
    const stringifiedFavorites = localStorage.getItem('favorites')
    if (stringifiedFavorites) {
      const favorites = JSON.parse(stringifiedFavorites)
      const newFavorites = favorites.filter((uuid: string) => !selectedFavorites.includes(uuid))
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  }

  const saveSelectedToCart = () => {
    addSelectedFavoritesToCart(selectedFavorites)

    const stringifiedCart = localStorage.getItem('cart')
    const cartFromLocalStorage = stringifiedCart ? JSON.parse(stringifiedCart) : []

    selectedFavorites.forEach(selectedItem => {
      if (cartFromLocalStorage.includes(selectedItem)) return
      cartFromLocalStorage.push(selectedItem)
    })
    localStorage.setItem('cart', JSON.stringify(cartFromLocalStorage))
  }

  return (
    <div className="mt-[40px] flex items-center gap-2">
      <input
        type="checkbox"
        checked={areAllFavoritesSelected}
        onChange={toggleAreAllFavoritesSelected}
      />

      <div className="flex items-center gap-2 underline underline-offset-2">
        <IconShare />
        <span className="text-[0.75rem] font-normal">Share</span>
      </div>

      <div
        className="flex cursor-pointer items-center gap-2 underline underline-offset-2"
        onClick={saveSelectedToCart}
      >
        {/* <IconHeart /> */}
        <IconFadedCart />
        <span className="text-[0.75rem] font-normal">Add To Cart</span>
      </div>

      <div
        className="flex cursor-pointer items-center gap-2 underline underline-offset-2"
        onClick={deleteSelectedFromFavorites}
      >
        <IconDelete />
        <span className="text-[0.75rem] font-normal">Delete</span>
      </div>
    </div>
  )
}
