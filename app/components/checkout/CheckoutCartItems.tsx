"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { useCartStore, useCheckoutStore } from "@/state/uiState"
import { ProductItemType } from "@/types/productItem"
import CheckoutCartItem from "@/app/components/checkout/CheckoutCartItem"

export default function CheckoutCartItems() {
  const { isCartOpen } = useCheckoutStore()
  const { cart } = useCartStore()
  const [products, setProducts] = useState<ProductItemType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      let { data: products, error } = await supabase
        .from('products')
        .select('*')
        .in('uuid', cart)
      if (error) console.log(error.message)
      setProducts(products ? products : [])
    }
    getProducts()
  }, [])

  return (
    isCartOpen && (
      <div>
        <div className="flex w-[350px] flex-col gap-4">
          {products.map((product) => (
            <CheckoutCartItem key={product.uuid} product={product} />))}
        </div>
      </div>
    )
  )
}
