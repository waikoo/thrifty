"use client"
import { useState, useRef, useEffect } from "react"

import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/client/checkoutState";

export default function PaymentForm() {
  const { isPaymentOpen, setIsShippingHidden, setIsContactHidden, isPaymentHidden, setIsPaymentHidden, edit, setEdit, setIsShippingErrorFree, zipcode, country, city, address, setIsContactErrorFree, setIsPaymentErrorFree, isShippingErrorFree } = useCheckoutStore()
  const sectionRef = useRef<HTMLElement>(null)
  const [activeBg, setActiveBg] = useState(opacityHalf)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsPaymentHidden(false)
      setIsShippingHidden(true)
      setIsContactHidden(true)
      setActiveBg(opacityFull)
    }
    if (address && city && country && zipcode) {
      setIsShippingErrorFree(true)
    } else if (!address || !city || !country || !zipcode) {
      setIsShippingErrorFree(false)
    }
  }

  useEffect(() => {
    if (isPaymentHidden) {
      setActiveBg(opacityHalf)
    } else {
      setActiveBg(`shadow-lg ${opacityFull}`)
    }

    if (sectionRef.current && edit === 'PAYMENT') {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setEdit('')
    }
  }, [isPaymentHidden])

  return (
    <section className={`${activeBg} bg-white flex flex-col gap-8 p-8 mb-10 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}>
      <CheckoutContactTitle number="3" title="PAYMENT" isBlockHidden={isPaymentHidden} />

      {isPaymentOpen &&
        <>
          <div className="flex flex-col xl:flex-row gap-8">
            <CheckoutRadio price="" text="Cash" value="cash" name="payment" isBlockHidden={isPaymentHidden} />
            <CheckoutRadio price="" text="Credit or Debit Card" value="card" name="payment" isBlockHidden={isPaymentHidden} />
          </div>

          <CartPaymentMethods isBlockHidden={isPaymentHidden} />
        </>
      }
    </section>
  )
}
