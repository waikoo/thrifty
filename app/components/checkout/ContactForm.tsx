"use client"
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { useCheckoutStore } from "@/state/uiState";

export default function ContactForm() {
  const { isContactOpen } = useCheckoutStore()

  return (
    <section className="flex flex-col gap-8 p-8">
      <CheckoutContactTitle number="1" title="CONTACT" />

      {isContactOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutContact id="firstname" type="text" text="First Name" />
            <CheckoutContact id="lastname" type="text" text="Last Name" />
          </div>

          <div className="flex gap-8">
            <CheckoutContact id="phone" type="tel" text="Phone Number" />
            <CheckoutContact id="email" type="email" text="Email Address" />
          </div>
          <p className="ml-auto cursor-pointer text-[0.6875rem] font-extrabold">USE DIFFERENT CONTACT</p>
        </>
      }
    </section>
  )
}
