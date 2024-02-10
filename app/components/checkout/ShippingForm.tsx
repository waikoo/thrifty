"use client"
import { useEffect, useRef, useState } from "react";

import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { useCheckoutStore } from "@/state/uiState";

export default function ShippingForm() {
  const { isShippingOpen, setIsContactHidden, isShippingHidden, setIsPaymentHidden, setIsShippingHidden } = useCheckoutStore()
  const sectionRef = useRef(null)
  const [activeBg, setActiveBg] = useState(opacityHalf)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsShippingHidden(false)
      setIsContactHidden(true)
      setIsPaymentHidden(true)
      setActiveBg(opacityFull)
    }
  }
  useEffect(() => {
    if (isShippingHidden) {
      setActiveBg(opacityHalf)
    }
  }, [isShippingHidden])

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
            <CheckoutContact id="address" type="text" text="Street, Number, Apartment" activeBg={activeBg} title="SHIPPING" />
            <CheckoutContact id="city" type="text" text="City" activeBg={activeBg} title="SHIPPING" />
          </div>

          <div className="flex gap-8">
            <CheckoutContact id="country" type="text" text="Country" activeBg={activeBg} title="SHIPPING" />
            <CheckoutContact id="zipcode" type="tel" text="Postal Code" activeBg={activeBg} title="SHIPPING" />
          </div>
          <p className="font-regular mr-auto text-[0.6875rem]">*Free shipping above €25 </p>
        </>
      }
    </section>
  )
}
