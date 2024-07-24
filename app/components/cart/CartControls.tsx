import { useEffect } from "react"

import { useCartStore, useSelectedCartStore } from "@/state/client/cartState"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { FiShare2 } from "react-icons/fi"
import { albert_500 } from "@/utils/fonts"
import { RxCross1 } from "react-icons/rx"
import { IoMdHeartEmpty } from "react-icons/io"

export default function CartControls() {
  const { emptyCart, cart, removeSelectedFromCart } = useCartStore()
  const { selected, areAllSelected, toggleAreAllSelected, setAllSelectedCartItemsTo, emptySelectedCart } = useSelectedCartStore()
  const { addSelectedToFavorites } = useFavoriteStore()

  useEffect(() => {
    setAllSelectedCartItemsTo(areAllSelected ? cart : [])
  }, [areAllSelected])

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
    <div className={`mt-[40px] flex items-center gap-4 xl:text-[14px] text-[#757575] ${albert_500.className}`}>
      <input type="checkbox" checked={areAllSelected} onChange={toggleAreAllSelected} />

      <div className="flex cursor-pointer items-center gap-1">
        <FiShare2 color="#757575" size={13} />
        <span className="text-[0.75rem] font-normal">Share</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1" onClick={saveSelectedToFavorites}>
        <IoMdHeartEmpty />
        <span className="text-[0.75rem] font-normal">Save</span>
      </div>

      <div className="flex cursor-pointer items-center gap-1" onClick={deleteSelectedFromCart}>
        <RxCross1 />
        <span className="text-[0.75rem] font-normal">Delete</span>
      </div>
    </div>
  )
}
