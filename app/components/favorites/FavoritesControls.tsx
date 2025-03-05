import React, { useRef } from 'react'

import IconShare from '@/app/components/cart/icons/IconShare'
import IconDelete from '@/app/components/cart/icons/IconDelete'
import IconFadedCart from '@/app/components/favorites/IconFadedCart'
import { useFavoriteStore, useSelectedFavoritesStore } from '@/state/client/favoriteState'
import { useCartStore } from '@/state/client/cartState'

export default function FavoritesControls() {
  const { selectedFavorites, areAllFavoritesSelected, toggleAreAllFavoritesSelected, setAllSelectedFavoritesItemsTo, emptySelectedFavorites } = useSelectedFavoritesStore()
  const { favorites, emptyFavorites, initFavorites } = useFavoriteStore()
  const { addSelectedFavoritesToCart } = useCartStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const deleteSelectedFromFavorites = () => {
    if (areAllFavoritesSelected) {
      emptyFavorites()
      emptySelectedFavorites()
      localStorage.setItem('favorites', '[]')
      return
    }

    const newFavorites = favorites.filter(favorite => !selectedFavorites.includes(favorite))

    console.log(newFavorites)
    initFavorites(newFavorites)
    emptySelectedFavorites()
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
    toggleAreAllFavoritesSelected(false)
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

  function handleAreAllSelected(): void {
    if (inputRef.current) {
      if (inputRef.current.checked) {
        toggleAreAllFavoritesSelected(true)
        setAllSelectedFavoritesItemsTo(favorites)
        return
      }
      toggleAreAllFavoritesSelected(false)
      setAllSelectedFavoritesItemsTo([])
    }
  }

  return (
    <div className="mt-[40px] text-[#757575] flex items-center gap-2 text-[13px] sm:text-[17px] xl:text-[14px]">
      <input
        type="checkbox"
        checked={areAllFavoritesSelected}
        onChange={handleAreAllSelected}
        ref={inputRef}
        className="checked:bg-t_black hover:bg-gray-200"
      />

      <div className="flex cursor-pointer items-center gap-2 text-[#757575]  hover:text-[#151515]">
        <IconShare />
        <span className="">Share</span>
      </div>

      <div
        className="flex cursor-pointer items-center gap-2 text-[#757575] hover:text-[#151515]"
        onClick={saveSelectedToCart}
      >
        <IconFadedCart />
        <span className="">Add To Cart</span>
      </div>

      <div
        className="flex cursor-pointer items-center gap-2 text-[#757575] hover:text-[#151515]"
        onClick={deleteSelectedFromFavorites}
      >
        <IconDelete size={'14'} />
        <span className="">Remove</span>
      </div>
    </div>
  )
}
