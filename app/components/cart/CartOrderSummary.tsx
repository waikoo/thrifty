"use client"
import { useEffect, useState } from "react";

import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { ProductItemType } from "@/types/productItem";
import SummaryFreeDelivery from "@/app/components/cart/SummaryFreeDelivery";
import SummaryShippingSelect from "@/app/components/cart/SummaryShippingSelect";
import SummarySubmit from "@/app/components/checkout/SummarySubmit";
import { EURO, FREE_HOME_DELIVERY_PRICE } from "@/app/components/data/orderSummary";
import { useOrderStore, useOrderSummaryStore } from "@/state/client/orderState";
import { useCartStore } from "@/state/client/cartState";
import { albert, albert_900 } from "@/utils/fonts";
import useViewport from "@/app/components/hooks/useViewport";
import { borderBottomRadius, borderTopRadius } from "@/app/components/data/universalStyles";
import { usePathname } from "next/navigation";

type CartOrderSummaryProps = {
  isCheckout?: boolean
  products?: ProductItemType[] | null
  className?: string
}

export default function CartOrderSummary({ isCheckout, products, className }: CartOrderSummaryProps) {
  const { cart, cartTotalPrice, setCartTotalPrice, cartLength } = useCartStore()
  const { shippingType, setIsFreeDelivery, isFreeDelivery } = useOrderStore()
  const { shippingPrice, setTotalWithShipping, totalWithShipping, shippingText } = useOrderSummaryStore()
  const viewportWidth = useViewport()
  const [position, setPosition] = useState(
    viewportWidth < 1280 ? 'fixed' : 'static'
  )
  const sidePadding = position === 'fixed' ? 'px-5' : '';
  const h1Style = isCheckout ? "py-4" : "my-10"
  const bgColor = isCheckout ? 'bg-[#fff]' : 'bg-[#f9f9f9]'
  const pathname = usePathname()
  const endpoint = pathname.split('/').at(-1);
  const buttonToStatic = endpoint === 'checkout' ? 1200 : endpoint === 'cart' ? 500 : 0

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > buttonToStatic) {
        setPosition('static')
      } else {
        setPosition('fixed')
      }
    }

    if (viewportWidth < 1280) {
      setPosition('fixed')
    } else {
      setPosition('static')
    }

    if (viewportWidth < 1280) {

      window.addEventListener('scroll', handleScroll)

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [viewportWidth])

  useEffect(() => {
    if (products) {
      const matches = products.filter((product) => cart.includes(product.uuid))
      const cartTotalPrice = matches.reduce((prev, curr) => prev + curr.price, 0)
      setCartTotalPrice(cartTotalPrice)
      if (cartTotalPrice >= FREE_HOME_DELIVERY_PRICE) {
        setIsFreeDelivery(true)
      }
    }
  }, [])

  useEffect(() => {
    setIsFreeDelivery(cartTotalPrice > FREE_HOME_DELIVERY_PRICE)
    setTotalWithShipping(cartTotalPrice + shippingPrice)
  }, [cartTotalPrice])

  return (
    <div className={`xl:w-[350px] xl:min-w-[350px] self-start ${isCheckout ? '' : 'pb-[30px]'} mx-auto`}>

      <h1 className={`${h1Style} text-center text-[16px] sm:text-[21px] xl:text-[18px] ${albert_900.className}`}>
        ORDER SUMMARY
      </h1>
      <div className={`grid grid-cols-2 gap-3 py-6  ${className} ${isCheckout ? 'rounded-bl-none rounded-br-none' : 'rounded-[35px]'} ${borderTopRadius} ${borderBottomRadius} ${bgColor}`}>
        {!isCheckout && (< SummaryFreeDelivery />)}

        <span className={`text-[13px] sm:text-[17px] xl:text-[14px] px-6 ${albert.className}`}>
          {cartLength} {cartLength > 1 ? "items" : "item"}
        </span>

        <span className={`text-[13px] justify-self-end sm:text-[17px] xl:text-[14px] px-6 ${albert.className}`}>
          {EURO}{cartTotalPrice}
        </span>

        <span className={`whitespace-nowrap text-[13px] sm:text-[17px] xl:text-[14px] px-6 ${albert.className}`}>
          {isCheckout ? (shippingType === "home" ? "Home Delivery 2-3 days" : "Collect from store") : "Shipping"}
        </span>

        <span className={`justify-self-end text-[13px] sm:text-[17px] xl:text-[14px] px-6 ${albert.className}`}>
          {isFreeDelivery ? "FREE" : `${shippingText}`}
        </span>

        {!isCheckout && <SummaryShippingSelect />}

        <div className={`${position} ${position === 'static' ? 'px-6' : ''} w-full col-span-2 grid grid-cols-2 items-center bg-t_white/30 backdrop-blur-md p-2 bottom-0 left-0 right-0 z-50`}>
          <span className={`my-4 whitespace-nowrap text-[14px] sm:text-[18px] xl:text-[15px] ${sidePadding} ${albert_900.className}`}>
            TOTAL
          </span>

          <span className={`self-center justify-self-end text-[14px] sm:text-[18px] xl:text-[15px] ${sidePadding} ${albert_900.className}`}>
            {EURO}{isFreeDelivery ? cartTotalPrice : totalWithShipping}
          </span>

          <SummarySubmit />
        </div>
      </div>

      {!isCheckout && <CartPaymentMethods isBlockHidden={false} />}

    </div >
  )
}
