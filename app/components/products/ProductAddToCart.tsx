"use client"
import { useEffect } from "react"
import { twMerge as tm } from "tailwind-merge"

import { useCartStore } from "@/state/uiState"

type ProductAddToCartProps = {
  uuid: string
  className?: string
}

export default function ProductAddToCart({ uuid, className }: ProductAddToCartProps) {
  const { addToCart, cart, initCart } = useCartStore()

  function addItemToCart(): void {
    addToCart(uuid)
  }

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    const stringifiedCart = localStorage.getItem('cart')
    if (stringifiedCart) {
      const storedCart = JSON.parse(stringifiedCart)
      initCart(storedCart)
    }
  }, [])

  return (
    <button className={tm(`bg-darkgrey w-full cursor-pointer py-4 text-center text-[0.75rem] font-medium text-white ${className}`)} onClick={addItemToCart}>
      <span className="select-none">ADD TO CART</span>
    </button>
  )
}
