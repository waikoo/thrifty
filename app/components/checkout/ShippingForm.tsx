"use client"
import { useEffect, useRef, useState } from "react";

import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/uiState";

export default function ShippingForm() {
  const { isShippingOpen, setIsContactCompleted, isShippingCompleted, setIsPaymentCompleted, setIsShippingCompleted } = useCheckoutStore()
  const sectionRef = useRef(null)
  const [activeBg, setActiveBg] = useState(opacityHalf)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsShippingCompleted(false)
      setIsContactCompleted(true)
      setIsPaymentCompleted(true)
      setActiveBg(opacityFull)
    }
  }
  useEffect(() => {
    if (isShippingCompleted) {
      setActiveBg(opacityHalf)
    }
  }, [isShippingCompleted])

  return (
    <section className={`${activeBg} bg-bkg flex flex-col gap-8 p-8 ${borderRadius}`} onClick={handleOnClick} ref={sectionRef}>
      <CheckoutContactTitle number="2" title="SHIPPING" />

      {isShippingOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutRadio price="€10*" text="Home Delivery" value="home" name="shipping" />
            <CheckoutRadio price="Free" text="Collect From Store" value="store" name="shipping" />
          </div>

          <div className="flex gap-8">
            <CheckoutContact id="address" type="text" text="Street, Number, Apartment" activeBg={activeBg} />
            <CheckoutContact id="city" type="text" text="City" activeBg={activeBg} />
          </div>

          <div className="flex gap-8">
            <CheckoutContact id="country" type="text" text="Phone Number" activeBg={activeBg} />
            <CheckoutContact id="zipcode" type="tel" text="Postal Code" activeBg={activeBg} />
          </div>
          <p className="font-regular mr-auto text-[0.6875rem]">*Free shipping above €25 </p>
        </>
      }
    </section>
  )
}
