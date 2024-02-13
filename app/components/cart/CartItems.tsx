"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import CartItem from "@/app/components/cart/CartItem"
import CartControls from "@/app/components/cart/CartControls"
import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import { useCartStore } from "@/state/uiState"
import { fetchProductsByUuids } from "@/utils/fetchProductsByUuids"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"

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
    <section className="flex justify-between gap-32">
      <div className="flex flex-col gap-8">

        <CartControls />

        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <CartItem key={product.uuid} product={product} />))}
        </div>
      </div>

      <CartOrderSummary className="border-[0.1rem]" />

    </section>
  )
}
