import { useRef } from "react"

import { FiShare2 } from "react-icons/fi"
import { RxCross1 } from "react-icons/rx"
import { IoMdHeartEmpty } from "react-icons/io"

import { useCartStore, useSelectedCartStore } from "@/state/client/cartState"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { albert_500 } from "@/utils/fonts"
import ShareProduct from "../generic/ShareProduct"
import { useUIStore } from "@/state/client/uiState"

export default function CartControls() {
  const { emptyCart, cart, removeSelectedFromCart, removeFromCart, initCart } = useCartStore()
  const { selected, areAllSelected, toggleAreAllSelected, setAllSelectedCartItemsTo, emptySelectedCart } = useSelectedCartStore()
  const { addSelectedToFavorites } = useFavoriteStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const { showShare, setShowShare } = useUIStore()

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

  const deleteSelectedFromCart = () => {
    if (areAllSelected) {
      emptyCart()
      emptySelectedCart()
      localStorage.setItem('cart', '[]')
      return
    }

    const newCart = cart.filter(cartItem => !selected.includes(cartItem))

    initCart(newCart)
    emptySelectedCart()
    localStorage.setItem('cart', JSON.stringify(newCart))
    toggleAreAllSelected(false)
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
    toggleAreAllSelected(false)
  }

  const shareSelectedProducts = () => {
    if (selected.length > 0) {
      setShowShare(true)
    }
  }

  return (
    <div className={`mt-[40px] flex items-center gap-4 text-[13px] sm:text-[17px] xl:text-[14px] text-[#757575] ${albert_500.className}`}>
      <input
        type="checkbox"
        checked={areAllSelected}
        onChange={handleAreAllSelected}
        ref={inputRef}
        className="checked:bg-t_black hover:bg-gray-200"
      />

      <div className="flex cursor-pointer items-center gap-1 text-[#757575] hover:text-[#151515]" onClick={shareSelectedProducts}>
        <FiShare2 size={13} />
        <span className="">Share</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1 hover:text-[#151515]" onClick={saveSelectedToFavorites}>
        <IoMdHeartEmpty />
        <span className="">Save</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1 hover:text-[#151515]" onClick={deleteSelectedFromCart}>
        <RxCross1 />
        <span className="">Remove</span>
      </div>
      {showShare && <ShareProduct productUuid={selected} />}
    </div>
  )
}
