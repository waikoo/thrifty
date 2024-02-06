"use client"

import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { useCheckoutStore, useOrderStore } from "@/state/uiState";

export default function ShippingForm() {
  const { isShippingOpen } = useCheckoutStore()

  return (
    <section className="flex flex-col gap-8 p-8">
      <CheckoutContactTitle number="2" title="SHIPPING" />

      {isShippingOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutRadio price="€10*" text="Home Delivery" value="home" name="shipping" />
            <CheckoutRadio price="Free" text="Collect From Store" value="store" name="shipping" />
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
  )
}
