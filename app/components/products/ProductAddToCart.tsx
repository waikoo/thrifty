"use client"
import { useEffect } from "react"
import { twMerge as tm } from "tailwind-merge"

import { useCartStore } from "@/state/client/cartState"
import { albert_700 } from "@/utils/fonts"

type ProductAddToCartProps = {
  uuid: string
  className?: string
  children?: React.ReactNode
}

export default function ProductAddToCart({ uuid, className, children }: ProductAddToCartProps) {
  const { addToCart, cart, initCart } = useCartStore()

  const isInCart = cart.includes(uuid)
  const inCartStyle = isInCart ? 'bg-t_black text-t_white hover:text-black' : 'bg-t_white text-t_black'

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
    <button className={tm(`bg-t_white text-[#3e3e3e] border-[#3e3e3e] hover:border-none hover:bg-[#e3e3e3] hover:text-black w-full cursor-pointer rounded-full border-[0.1rem] py-2 text-center text-[11px] sm:text-[15px] xl:text-[12px] text-nowrap ${inCartStyle} ${albert_700.className} ${className}`)}
      onClick={addItemToCart}
    >
      <span className="select-none">{!isInCart ? children : 'ADDED TO CART'}</span>
    </button>
  )
}
