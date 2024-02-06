"use client"
import CartPaymentMethods from "@/app/components/cart/CartPaymentMethods";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import { useCheckoutStore } from "@/state/uiState";

type CheckoutFormProps = {
  className: string
}

export default function CheckoutForm({ className }: CheckoutFormProps) {
  const { isContactOpen, isShippingOpen, isPaymentOpen } = useCheckoutStore()

  return (
    <div className={`bg-bkg mb-[10rem] w-[800px] ${className}`}>
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
      <hr />

      <section className="flex flex-col gap-8 p-8">
        <CheckoutContactTitle number="2" title="SHIPPING" />

        {isShippingOpen &&
          <>
            <div className="flex gap-8">
              <CheckoutRadio price="€10*" text="Home Delivery" />
              <CheckoutRadio price="Free" text="Collect From Store" />
            </div>

            <div className="flex gap-8">
              <CheckoutContact id="address" type="text" text="Street, Number, Apartment" />
              <CheckoutContact id="city" type="text" text="City" />
            </div>

            <div className="flex gap-8">
              <CheckoutContact id="country" type="text" text="Phone Number" />
              <CheckoutContact id="zipcode" type="tel" text="Postal Code" />
            </div>
            <p className="font-regular mr-auto text-[0.6875rem]">*Free shipping above €25 </p>
          </>
        }
      </section>
      <hr />

      <section className="flex flex-col gap-8 p-8">
        <CheckoutContactTitle number="3" title="PAYMENT" />
        {isPaymentOpen &&
          <>
            <div className="flex gap-8">
              <CheckoutRadio price="" text="Cash" />
              <CheckoutRadio price="" text="Credit or Debit Card" />
            </div>

            <CartPaymentMethods className="" />
          </>
        }
      </section>
      <hr />
    </div>
  )
}
