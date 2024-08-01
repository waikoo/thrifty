"use client"
import { useEffect, useRef, useState } from "react";

import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutRadio from "@/app/components/checkout/CheckoutRadio";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { borderRadius, opacityHalf, opacityFull } from "@/app/components/data/universalStyles";
import { AddressesType } from "@/app/components/checkout/CheckoutForm";
import { useCheckoutStore } from "@/state/client/checkoutState";
import { useOrderStore } from "@/state/client/orderState";
import { albert_500 } from "@/utils/fonts";

type ShippingFormProps = {
  defaultAddress: AddressesType
}

export default function ShippingForm({ defaultAddress }: ShippingFormProps) {
  const { isShippingOpen, setIsContactHidden, isShippingHidden, setIsPaymentHidden, setIsShippingHidden, edit, setEdit } = useCheckoutStore()
  const { shippingType } = useOrderStore()
  const sectionRef = useRef<HTMLElement>(null)
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
    } else {
      setActiveBg(`shadow-lg ${opacityFull}`)
    }
    if (sectionRef.current && edit === 'SHIPPING') {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setEdit('')
    }
  }, [isShippingHidden])

  return (
    <section className={`${activeBg} bg-white flex flex-col gap-8 p-8 ${borderRadius}`} onClick={handleOnClick} ref={sectionRef}>
      <CheckoutContactTitle number="2" title="SHIPPING" />

      {isShippingOpen &&
        <>
          <div className="flex flex-col xl:flex-row gap-8">
            <CheckoutRadio price="€10*" text="Home Delivery" value="home" name="shipping" />
            <CheckoutRadio price="Free" text="Collect From Store" value="store" name="shipping" />
          </div>

          {shippingType === "home" &&
            <>
              <div className="flex flex-col xl:flex-row gap-8">
                <CheckoutContact
                  id="address"
                  type="text"
                  text="Street, Number, Apartment"
                  title="SHIPPING"
                  defaultValue={defaultAddress.address}
                />

                <CheckoutContact
                  id="city"
                  type="text"
                  text="City"
                  title="SHIPPING"
                  defaultValue={defaultAddress.city}
                />
              </div>

              <div className="flex flex-col xl:flex-row gap-8">
                <CheckoutContact
                  id="country"
                  type="text"
                  text="Country"
                  title="SHIPPING"
                  defaultValue={defaultAddress.country}
                />
                <CheckoutContact
                  id="zipcode"
                  type="tel"
                  text="Postal Code"
                  title="SHIPPING"
                  defaultValue={defaultAddress.zipcode}
                />
              </div>
            </>
          }
          <p className={`${albert_500.className} mr-auto text-[11px] sm:text-[14px] xl:text-[12px]`}>
            *Free shipping above €25
          </p>
        </>
      }
    </section>
  )
}
