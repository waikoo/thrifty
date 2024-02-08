"use client"
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { useCheckoutStore } from "@/state/uiState";
import { borderRadius } from "@/app/components/data/universalStyles";
import { useRef } from "react";


export default function ContactForm() {
  const { isContactOpen, isContactCompleted, setIsContactCompleted, setIsPaymentCompleted, setIsShippingCompleted } = useCheckoutStore()
  const activeBg = isContactCompleted ? 'bg-opacity-50' : 'bg-opacity-100'
  const sectionRef = useRef(null)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsContactCompleted(false)
      setIsShippingCompleted(true)
      setIsPaymentCompleted(true)
    }
  }

  return (
    <section className={`${activeBg} bg-bkg flex flex-col gap-8 p-8 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}>
      <CheckoutContactTitle number="1" title="CONTACT" />

      {isContactOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutContact id="firstname" type="text" text="First Name" activeBg={activeBg} />
            <CheckoutContact id="lastname" type="text" text="Last Name" activeBg={activeBg} />
          </div>

          <div className="flex gap-8">
            <CheckoutContact id="phone" type="tel" text="Phone Number" activeBg={activeBg} />
            <CheckoutContact id="email" type="email" text="Email Address" activeBg={activeBg} />
          </div>
          <p className="ml-auto cursor-pointer text-[0.6875rem] font-extrabold">USE DIFFERENT CONTACT</p>
        </>
      }
    </section>
  )
}
