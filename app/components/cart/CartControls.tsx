import { useEffect, useRef } from "react"

import { FiShare2 } from "react-icons/fi"
import { RxCross1 } from "react-icons/rx"
import { IoMdHeartEmpty } from "react-icons/io"

import { useCartStore, useSelectedCartStore } from "@/state/client/cartState"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { albert_500 } from "@/utils/fonts"

export default function CartControls() {
  const { emptyCart, cart, removeSelectedFromCart } = useCartStore()
  const { selected, areAllSelected, toggleAreAllSelected, setAllSelectedCartItemsTo, emptySelectedCart } = useSelectedCartStore()
  const { addSelectedToFavorites } = useFavoriteStore()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAreAllSelected = () => {
    if (inputRef.current) {
      if (inputRef.current.checked) {
        toggleAreAllSelected(true)
        setAllSelectedCartItemsTo(cart)
        return
      }
      toggleAreAllSelected(false)
      setAllSelectedCartItemsTo([])
    }
  }

  useEffect(handleAreAllSelected, [areAllSelected, cart])

  const deleteSelectedFromCart = () => {
    if (areAllSelected) {
      emptyCart()
      emptySelectedCart()
      localStorage.setItem('cart', '[]')
      return
    }
    removeSelectedFromCart(selected)
    const stringifiedCart = localStorage.getItem('cart')
    if (stringifiedCart) {
      const cart = JSON.parse(stringifiedCart)
      const newCart = cart.filter((uuid: string) => !selected.includes(uuid))
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  const saveSelectedToFavorites = () => {
    addSelectedToFavorites(selected)

    const stringifiedFavorites = localStorage.getItem('favorites')
    const favoritesFromLocalStorage = stringifiedFavorites ? JSON.parse(stringifiedFavorites) : []
    selected.forEach(selectedItem => {
      if (favoritesFromLocalStorage.includes(selectedItem)) return
      favoritesFromLocalStorage.push(selectedItem)
    })
    localStorage.setItem('favorites', JSON.stringify(favoritesFromLocalStorage))
  }

  return (
    <div className={`mt-[40px] flex items-center gap-4 text-[13px] sm:text-[17px] xl:text-[14px] text-[#757575] ${albert_500.className}`}>
      <input
        type="checkbox"
        checked={areAllSelected}
        onChange={handleAreAllSelected}
        ref={inputRef}
      />

      <div className="flex cursor-pointer items-center gap-1">
        <FiShare2 color="#757575" size={13} />
        <span className="">Share</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1" onClick={saveSelectedToFavorites}>
        <IoMdHeartEmpty />
        <span className="">Save</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1" onClick={deleteSelectedFromCart}>
        <RxCross1 />
        <span className="">Remove</span>
      </div>
    </div>
  )
}
