import { useEffect } from "react"

import { useCartStore, useFavoriteStore, useSelectedCartStore } from "@/state/uiState"
import IconShare from "@/app/components/cart/icons/IconShare"
import IconDelete from "@/app/components/cart/icons/IconDelete"
import IconHeart from "@/app/components/cart/icons/IconHeart"

export default function CartControls() {
  const { emptyCart, cart, removeSelectedFromCart } = useCartStore()
  const { selected, areAllSelected, toggleAreAllSelected, setAllSelectedCartItemsTo, emptySelectedCart } = useSelectedCartStore()
  const { addSelectedToFavorites } = useFavoriteStore()

  console.log(cart)

  useEffect(() => {
    setAllSelectedCartItemsTo(areAllSelected ? cart : [])
  }, [areAllSelected])

  const emptyCartItems = () => {
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
    if (areAllSelected) {
      addSelectedToFavorites(selected)
    }
  }

  return (
    <div className="mt-[40px] flex items-center gap-2">
      <input type="checkbox" checked={areAllSelected} onChange={toggleAreAllSelected} />
      <div className="flex items-center gap-2 underline underline-offset-2">
        <IconShare />
        <span className="text-[0.75rem] font-normal">Share</span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 underline underline-offset-2" onClick={saveSelectedToFavorites}>
        <IconHeart />
        <span className="text-[0.75rem] font-normal"> Save </span>
      </div>
      <div className="flex cursor-pointer items-center gap-2 underline underline-offset-2">
        <IconDelete />
        <span className="text-[0.75rem] font-normal" onClick={emptyCartItems}> Delete </span>
      </div>
    </div>
  )
}
