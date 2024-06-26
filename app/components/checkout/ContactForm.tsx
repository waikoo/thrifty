"use client"
import { useEffect, useRef, useState } from "react";

import CheckoutContactTitle from "@/app/components/checkout/CheckoutContactTitle";
import CheckoutContact from "@/app/components/checkout/CheckoutContact";
import { borderRadius, opacityFull, opacityHalf } from "@/app/components/data/universalStyles";
import { AddressesType } from "@/app/components/checkout/CheckoutForm";
import useUserSession from "@/app/components/hooks/useUserSession";
import Portal from "@/app/components/generic/Portal";
import CheckoutDifferentAddressPopup from "@/app/components/checkout/CheckoutDifferentAddressPopup";
import { useCheckoutStore } from "@/state/client/checkoutState";

type ContactFormProps = {
  addresses: AddressesType[]
  displayAddress: AddressesType
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
}

export default function ContactForm({ addresses, displayAddress, setChosenAddressId }: ContactFormProps) {
  const { isContactOpen, isContactHidden, setIsContactHidden, setIsPaymentHidden, setIsShippingHidden } = useCheckoutStore()
  const activeBg = isContactHidden ? opacityHalf : opacityFull
  const sectionRef = useRef(null)
  const { session, error } = useUserSession()
  const [showAddresses, setShowAddresses] = useState(false)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsContactHidden(false)
      setIsShippingHidden(true)
      setIsPaymentHidden(true)
    }
  }

  function showSavedAddresses() {
    setShowAddresses(!showAddresses)
  }

  return (
    <section className={`${activeBg} bg-bkg flex flex-col gap-8 p-8 ${borderRadius}`} ref={sectionRef} onClick={handleOnClick}>
      <CheckoutContactTitle number="1" title="CONTACT" />

      {isContactOpen &&
        <>
          <div className="flex gap-8">
            <CheckoutContact
              title="CONTACT"
              id="firstname"
              type="text"
              text="First Name"
              activeBg={activeBg}
              defaultValue={displayAddress.firstName}
            />

            <CheckoutContact
              title="CONTACT"
              id="lastname"
              type="text"
              text="Last Name"
              activeBg={activeBg}
              defaultValue={displayAddress.lastName}
            />
          </div>

          <div className="flex gap-8">
            <CheckoutContact
              title="CONTACT"
              id="phone"
              type="number"
              text="Phone Number"
              activeBg={activeBg}
              defaultValue={displayAddress.phone}
            />
            <CheckoutContact
              title="CONTACT"
              id="email"
              type="email"
              text="Email Address"
              activeBg={activeBg}
              defaultValue={session?.user.email || ''}
            />
          </div>
          <p className="ml-auto cursor-pointer text-[0.6875rem] font-extrabold"
            onClick={showSavedAddresses}>
            USE DIFFERENT CONTACT
          </p>
        </>
      }
      {showAddresses && (
        <Portal>
          <CheckoutDifferentAddressPopup
            addresses={addresses}
            setChosenAddressId={setChosenAddressId}
            setShowAddresses={setShowAddresses} />
        </Portal>
      )}
    </section>
  )
}
