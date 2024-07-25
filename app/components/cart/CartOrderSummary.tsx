"use client"
import { useEffect } from "react";

import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { ProductItemType } from "@/types/productItem";
import SummaryFreeDelivery from "@/app/components/cart/SummaryFreeDelivery";
import SummaryShippingSelect from "@/app/components/cart/SummaryShippingSelect";
import SummarySubmit from "@/app/components/checkout/SummarySubmit";
import { EURO, FREE_HOME_DELIVERY_PRICE } from "@/app/components/data/orderSummary";
import { borderRadius } from "@/app/components/data/universalStyles";
import { useOrderStore, useOrderSummaryStore } from "@/state/client/orderState";
import { useCartStore } from "@/state/client/cartState";
import { albert, albert_700, albert_900 } from "@/utils/fonts";

type CartOrderSummaryProps = {
  isCheckout?: boolean
  products?: ProductItemType[] | null
  className?: string
}

export default function CartOrderSummary({ isCheckout, products, className }: CartOrderSummaryProps) {
  const { cart, cartTotalPrice, setCartTotalPrice, cartLength } = useCartStore()
  const { shippingType, setIsFreeDelivery, isFreeDelivery } = useOrderStore()
  const { shippingPrice, setTotalWithShipping, totalWithShipping, shippingText } = useOrderSummaryStore()

  const h1Style = isCheckout ? "py-4" : "my-10"

  useEffect(() => {
    if (products) {
      const matches = products.filter((product) => cart.includes(product.uuid))
      const cartTotalPrice = matches.reduce((prev, curr) => prev + curr.price, 0)
      setCartTotalPrice(cartTotalPrice)
    }
  }, [])

  useEffect(() => {
    setIsFreeDelivery(cartTotalPrice > FREE_HOME_DELIVERY_PRICE)
    setTotalWithShipping(cartTotalPrice + shippingPrice)
  }, [cartTotalPrice])

  return (
    <div className={`w-[350px] min-w-[350px]`}>
      <h1 className={`${h1Style} text-center text-[0.875rem] text-[18px] ${albert_900.className}`}>
        ORDER SUMMARY
      </h1>

      <div className={`bg-[#f9f9f9] grid grid-cols-2 gap-3 p-6 ${className} rounded-[35px]`}>
        {!isCheckout && (< SummaryFreeDelivery />)}

        <span className={`text-[14px] ${albert.className}`}>
          {cartLength} {cartLength > 1 ? "items" : "item"}
        </span>

        <span className={`justify-self-end text-[14px] ${albert.className}`}>
          {EURO}{cartTotalPrice}
        </span>

        <span className={`whitespace-nowrap text-[14px] ${albert.className}`}>
          {isCheckout ? (shippingType === "home" ? "Home Delivery 2-3 days" : "Collect from store") : "Shipping"}
        </span>

        <span className={`justify-self-end text-[14px] ${albert.className}`}>
          {isFreeDelivery ? "FREE" : `${shippingText}`}
        </span>

        {!isCheckout && <SummaryShippingSelect />}

        <span className={`my-4 whitespace-nowrap text-[15px] ${albert_700.className}`}>TOTAL</span>
        <span className={`self-center justify-self-end text-[15px] ${albert_700.className}`}>{EURO}{isFreeDelivery ? cartTotalPrice : totalWithShipping}</span>

        <SummarySubmit />
      </div>

      {!isCheckout && <CartPaymentMethods />}

    </div>
  )
}
