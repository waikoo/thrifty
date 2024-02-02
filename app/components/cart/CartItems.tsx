"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { ProductItemType } from "@/types/productItem"
import CartItem from "@/app/components/cart/CartItem"
import CartControls from "@/app/components/cart/CartControls"
import CartOrderSummary from "@/app/components/cart/CartOrderSummary"
import { useCartStore } from "@/state/uiState"

export default function CartItems() {
  const [uuids, setUuids] = useState<string[]>([])
  const [products, setProducts] = useState<ProductItemType[]>([])
  const { cart, setCartTotalPrice } = useCartStore()

  useEffect(() => {
    const getProducts = async (uuid: string[]) => {
      let { data: products, error } = await supabase
        .from('products')
        .select('*')
        .in('uuid', uuid)
      return products
    }

    const uuidArr = localStorage.getItem('cart')
    if (uuidArr) {
      const uuids = JSON.parse(uuidArr)
      setUuids(uuids)

      getProducts(uuids).then((products => {
        if (products!!) {
          setProducts(products)
          const cartTotal = products.reduce((acc, curr) => acc + curr.price, 0)
          setCartTotalPrice(cartTotal)
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

      <CartOrderSummary />

    </section>
  )
}
