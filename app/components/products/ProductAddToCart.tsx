"use client"
import { useEffect } from "react"

import { useCartStore } from "@/state/uiState"

type ProductAddToCartProps = {
  uuid: string
}

export default function ProductAddToCart({ uuid }: ProductAddToCartProps) {
  const { toggleCart, cart, initCart } = useCartStore()

  function addToCart(): void {
    toggleCart(uuid)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const stringifiedCart = localStorage.getItem('cart')
    if (stringifiedCart) {
      const storedCart = JSON.parse(stringifiedCart)
      initCart(storedCart)
    }
  }, [])

  return (
    <div className="bg-darkgrey w-full cursor-pointer py-4 text-center text-[0.75rem] font-medium text-white">
      <span onClick={addToCart}>ADD TO CART</span>
    </div>
  )
}
