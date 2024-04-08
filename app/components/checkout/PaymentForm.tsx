"use client"
import { useState, useRef, useEffect } from "react"

import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/client/checkoutState";

export default function PaymentForm() {
  const { isPaymentOpen, setIsShippingHidden, setIsContactHidden, isPaymentHidden, setIsPaymentHidden } = useCheckoutStore()
  const sectionRef = useRef(null)
  const [activeBg, setActiveBg] = useState(opacityHalf)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsPaymentHidden(false)
      setIsShippingHidden(true)
      setIsContactHidden(true)
      setActiveBg(opacityFull)
    }
  }

  useEffect(() => {
    if (isPaymentHidden) {
      setActiveBg(opacityHalf)
    }
  }, [isPaymentHidden])

  return (
    <section className={`${activeBg} bg-bkg flex flex-col gap-8 p-8 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}>
      <CheckoutContactTitle number="3" title="PAYMENT" />

      {isPaymentOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutRadio price="" text="Cash" value="cash" name="payment" />
            <CheckoutRadio price="" text="Credit or Debit Card" value="card" name="payment" />
          </div>

          <CartPaymentMethods className="" />
        </>
      }
    </section>
  )
}
