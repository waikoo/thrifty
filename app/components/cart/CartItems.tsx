"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import CartItem from "@/app/components/cart/CartItem"
import CartControls from "@/app/components/cart/CartControls"
import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import { fetchProductsByUuids } from "@/db/fetchProductsByUuids"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import { useCartStore } from "@/state/client/cartState"

export default function CartItems() {
  const [products, setProducts] = useState<ProductItemType[]>([])
  const { cart, setCartTotalPrice } = useCartStore()

  useEffect(() => {
    const cartUuids = getFromLocalStorage('cart')

    if (cartUuids) {
      fetchProductsByUuids(supabase, cartUuids).then((matchedProducts => {
        if (matchedProducts) {
          setProducts(matchedProducts)
          setCartTotalPrice(matchedProducts.reduce((acc, curr) => acc + curr.price, 0))
        }
      }))
    }
  }, [cart])

  return (
    <section className="flex flex-col xl:flex-row justify-between xl:gap-32 px-20 rounded-b-[35px] bg-[#fff] min-h-[calc(80dvh)]">
      <div className="flex flex-col gap-8 rounded-b-[35px]">

        <CartControls />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <CartItem key={product.uuid} product={product} />))}
        </div>
      </div>

      <CartOrderSummary />

    </section>
  )
}
