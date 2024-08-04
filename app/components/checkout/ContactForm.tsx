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
import WithCloseButton from "@/app/components/navigation/WithCloseButton";
import { useOrderStore } from "@/state/client/orderState";

type ContactFormProps = {
  addresses: AddressesType[]
  displayAddress: AddressesType
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
}

export default function ContactForm({ addresses, displayAddress, setChosenAddressId }: ContactFormProps) {
  const { isContactOpen, isContactHidden, setIsContactHidden, setIsPaymentHidden, setIsShippingHidden, edit, setEdit, paymentType, setIsPaymentErrorFree, isPaymentClicked, address, city, country, zipcode, isShippingClicked, setIsShippingErrorFree } = useCheckoutStore()
  const { shippingType } = useOrderStore()
  const [activeBg, setActiveBg] = useState(`shadow-lg ${opacityFull}`)
  const sectionRef = useRef<HTMLElement>(null)
  const { session, error } = useUserSession()
  const [showAddresses, setShowAddresses] = useState(false)

  function handleOnClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (e.currentTarget === sectionRef.current) {
      setIsContactHidden(false)
      setIsShippingHidden(true)
      setIsPaymentHidden(true)
    }

    if ((address && city && country && zipcode) || shippingType === 'store') {
      setIsShippingErrorFree(true)
    } else if ((!address || !city || !country || !zipcode) && isShippingClicked && shippingType === 'home') {
      setIsShippingErrorFree(false)
    }

    if (!paymentType && isPaymentClicked) {
      setIsPaymentErrorFree(false)
    }
  }

  function showSavedAddresses() {
    setShowAddresses(!showAddresses)
  }

  const handleClosePopup = () => {
    setShowAddresses(false)
  }

  useEffect(() => {
    if (isContactHidden) {
      setActiveBg(opacityHalf)
    } else {
      setActiveBg(`shadow-lg ${opacityFull}`)
    }

    if (sectionRef.current && edit === 'CONTACT') {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      setEdit('')
    }

  }, [isContactHidden])

  useEffect(() => {

  }, [])
  return (
    <section className={`${activeBg} bg-white flex flex-col gap-8 p-8 ${borderRadius}`}
      ref={sectionRef}
      onClick={handleOnClick}
    >
      <CheckoutContactTitle number="1" title="CONTACT" isBlockHidden={isContactHidden} />

      {isContactOpen &&
        <>
          <div className="flex flex-col xl:flex-row gap-8">
            <CheckoutContact
              title="CONTACT"
              id="firstname"
              type="text"
              text="First Name"
              isBlockHidden={isContactHidden}
              defaultValue={displayAddress.firstName}
            />

            <CheckoutContact
              title="CONTACT"
              id="lastname"
              type="text"
              text="Last Name"
              isBlockHidden={isContactHidden}
              defaultValue={displayAddress.lastName}
            />
          </div>

          <div className="flex flex-col xl:flex-row gap-8">
            <CheckoutContact
              title="CONTACT"
              id="phone"
              type="number"
              text="Phone Number"
              isBlockHidden={isContactHidden}
              defaultValue={displayAddress.phone}
            />
            <CheckoutContact
              title="CONTACT"
              id="email"
              type="email"
              text="Email Address"
              isBlockHidden={isContactHidden}
              defaultValue={session?.user.email || ''}
            />
          </div>

          {session !== null && (
            <p className="ml-auto cursor-pointer sm:text-[14px] xl:text-[0.6875rem] font-extrabold"
              onClick={showSavedAddresses}>
              USE DIFFERENT CONTACT
            </p>
          )
          }
        </>
      }

      {showAddresses && (
        <Portal>
          <WithCloseButton onClose={handleClosePopup} padding="p-8" isPopUp={true}>
            <CheckoutDifferentAddressPopup
              addresses={addresses}
              setChosenAddressId={setChosenAddressId}
              setShowAddresses={setShowAddresses} />
          </WithCloseButton>
        </Portal>
      )}
    </section>
  )
}
