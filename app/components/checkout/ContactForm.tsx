"use client"
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { useCheckoutStore } from "@/state/uiState";
import { borderRadius, opacityFull, opacityHalf } from "@/app/components/data/universalStyles";
import { useEffect, useRef } from "react";


export default function ContactForm() {
  const { isContactOpen, isContactHidden, setIsContactHidden, setIsPaymentHidden, setIsShippingHidden, isShippingHidden, isContactErrorFree } = useCheckoutStore()
  const activeBg = isContactHidden ? opacityHalf : opacityFull
  const sectionRef = useRef(null)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsContactHidden(false)
      setIsShippingHidden(true)
      setIsPaymentHidden(true)
    }
  }

  return (
    <section className={`${activeBg} bg-bkg flex flex-col gap-8 p-8 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}>
      <CheckoutContactTitle number="1" title="CONTACT" />

      {isContactOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutContact title="CONTACT" id="firstname" type="text" text="First Name" activeBg={activeBg} />
            <CheckoutContact title="CONTACT" id="lastname" type="text" text="Last Name" activeBg={activeBg} />
          </div>

          <div className="flex gap-8">
            <CheckoutContact title="CONTACT" id="phone" type="number" text="Phone Number" activeBg={activeBg} />
            <CheckoutContact title="CONTACT" id="email" type="email" text="Email Address" activeBg={activeBg} />
          </div>
          <p className="ml-auto cursor-pointer text-[0.6875rem] font-extrabold" onClick={() => { }}>USE DIFFERENT CONTACT</p>
        </>
      }
    </section>
  )
}
