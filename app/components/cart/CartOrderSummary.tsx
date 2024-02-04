"use client"
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { useCartStore, useOrderStore, useOrderSummaryStore } from "@/state/uiState";
import { supabase } from "@/app/supabase";
import { ProductItemType } from "@/types/productItem";
import SummaryFreeDelivery from "@/app/components/cart/SummaryFreeDelivery";
import SummaryShippingSelect from "@/app/components/cart/SummaryShippingSelect";
import { EURO, FREE_HOME_DELIVERY_PRICE } from "@/app/components/data/orderSummary";

type CartOrderSummaryProps = {
  isCheckout?: boolean
}

export default function CartOrderSummary({ isCheckout }: CartOrderSummaryProps) {
  const [router, pathname] = [useRouter(), usePathname()]
  const [products, setProducts] = useState<ProductItemType[]>([])
  const lang = pathname.split("/")[1]
  const { cart, cartTotalPrice, setCartTotalPrice, cartLength } = useCartStore()
  const { shippingType, setShippingType, setIsFreeDelivery } = useOrderStore()
  const { shippingPrice, setShippingPrice, setTotalWithShipping, totalWithShipping, shippingText } = useOrderSummaryStore()
  // const [totalPayment, setTotalPayment] = useState(cartTotalPrice + shippingPrice)
  const h1Style = isCheckout ? "py-4" : "my-10"

  useEffect(() => {
    const cartTotalPrice = products.reduce((prev, curr) => prev + curr.price, 0)
    setCartTotalPrice(cartTotalPrice)
  }, [products])

  useEffect(() => {
    const getProducts = async () => {
      let { data: products, error } = await supabase
        .from('products')
        .select('*')
        .in('uuid', cart)

      if (error) console.log(error)
      console.log(products)
      if (products) {
        setProducts(products)
      }
    }
    getProducts()
    setTotalWithShipping(cartTotalPrice + shippingPrice)
  }, [])

  useEffect(() => {
    setIsFreeDelivery(cartTotalPrice > FREE_HOME_DELIVERY_PRICE)
    setTotalWithShipping(cartTotalPrice + shippingPrice)
  }, [cartTotalPrice])


  const checkout = () => {
    //   // setCheckoutInfo({ })
    //   console.table({
    //     payment: {
    //       total: totalWithShipping,
    //       currency: EURO
    //     },
    //     shipping: {
    //       price: shippingPrice,
    //       type: shippingType
    //     },
    //   })
    router.push(`/${lang}/checkout`)
  }

  return (
    <div className="bg-bkg max-w-[320px]">
      <h1 className={`${h1Style} text-center text-[0.875rem] font-semibold`}>ORDER SUMMARY</h1>

      <div className="border-faded bg-bkg grid grid-cols-2 gap-3 border-[0.1rem] p-6">
        {!isCheckout && (< SummaryFreeDelivery />)}

        <span className="text-[0.75rem] font-medium">{cartLength} {cartLength > 1 ? "items" : "item"}</span>
        <span className="justify-self-end text-[0.75rem] font-normal">{EURO}{cartTotalPrice}</span>
        <span className="text-[0.75rem] font-medium">Shipping</span>
        <span className="justify-self-end text-[0.75rem] font-normal">{isCheckout && EURO}{shippingText}</span>

        {!isCheckout && <SummaryShippingSelect />}

        <span className="my-4 whitespace-nowrap text-[0.875rem] font-semibold">TOTAL COST</span>
        <span className="self-center justify-self-end text-[0.875rem] font-semibold">{EURO}{totalWithShipping}</span>
        <button className="bg-content text-bkg col-span-full p-3 text-[0.875rem] font-semibold" onClick={checkout}>CHECKOUT</button>
      </div>

      {!isCheckout && <CartPaymentMethods />}

    </div>
  )
}
