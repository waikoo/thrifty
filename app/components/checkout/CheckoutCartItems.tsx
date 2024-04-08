"use client"
import { useEffect, useState } from "react"

import { supabase } from "@/app/supabase"
import { useCartStore } from "@/state/uiState"
import { ProductItemType } from "@/types/productItem"
import CheckoutCartItem from "@/app/components/checkout/CheckoutCartItem"
import { borderBottomRadius } from "@/app/components/data/universalStyles"
import { useCheckoutStore } from "@/state/client/checkoutState"

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
      <div className={`bg-bkg ${borderBottomRadius}`}>
        <div className={`flex w-[350px] flex-col gap-6 py-6`}>
          {products.map((product) => (
            <CheckoutCartItem key={product.uuid} product={product} />))}
        </div>
      </div>
    )
  )
}
