"use client"
import { useEffect } from "react"
import { twMerge as tm } from "tailwind-merge"

import { useCartStore } from "@/state/client/cartState"

type ProductAddToCartProps = {
  uuid: string
  className?: string
  children?: React.ReactNode
}

export default function ProductAddToCart({ uuid, className, children }: ProductAddToCartProps) {
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
    const stringifiedCart = localStorage.getItem('cart');
    const storedCart = stringifiedCart ? JSON.parse(stringifiedCart) : [];

    initCart(storedCart);
  }, []);

  return (
    <button className={tm(`bg-bkg text-content border-content w-full cursor-pointer rounded-full border-[0.1rem] py-2 text-center text-[0.6875rem] font-medium ${className}`)} onClick={addItemToCart}>
      <span className="select-none">{children}</span>
    </button>
  )
}
