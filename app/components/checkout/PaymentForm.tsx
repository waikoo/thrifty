"use client"
import { useState, useRef, useEffect } from "react"

import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/client/checkoutState";
import { useOrderStore } from "@/state/client/orderState";

export default function PaymentForm() {
  const { isPaymentOpen, setIsShippingHidden, setIsContactHidden, isPaymentHidden, setIsPaymentHidden, edit, setEdit, setIsShippingErrorFree, zipcode, country, city, address, setIsContactErrorFree, firstName, lastName, phone, email, setIsPaymentClicked, isShippingClicked, isContactClicked } = useCheckoutStore()
  const { shippingType } = useOrderStore()
  const sectionRef = useRef<HTMLElement>(null)
  const [activeBg, setActiveBg] = useState(opacityHalf)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    setIsPaymentClicked(true)
    if (e.currentTarget === sectionRef.current) {
      setIsPaymentHidden(false)
      setIsShippingHidden(true)
      setIsContactHidden(true)
      setActiveBg(opacityFull)
    }
    if ((address && city && country && zipcode) || shippingType === 'store') {
      setIsShippingErrorFree(true)
    } else if ((!address || !city || !country || !zipcode) && isShippingClicked && shippingType === 'home') {
      setIsShippingErrorFree(false)
    }
    if (firstName && lastName && phone && email) {
      setIsContactErrorFree(true)
    } else if ((!firstName || !lastName || !phone || !email) && isContactClicked) {
      setIsContactErrorFree(false)
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
    <section className={`${activeBg} bg-white flex flex-col gap-8 p-8 mb-10 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}
    // tabIndex={11} onBlur={() => alert('focus lost')}
    >
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
