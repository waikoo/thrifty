"use client"
import { useEffect, useState } from "react";

import { supabase } from "@/app/supabase";
import ContactForm from "@/app/components/checkout/ContactForm";
import ShippingForm from "@/app/components/checkout/ShippingForm";
import PaymentForm from "@/app/components/checkout/PaymentForm";
import CheckoutGuestOrAccount from "@/app/components/checkout/CheckoutGuestOrAccount";
import { getUserId } from "@/utils/getUserId";
import { useCheckoutStore } from "@/state/client/checkoutState";

type CheckoutFormProps = {
  className: string
  showSignIn: boolean
}

export type AddressesType = {
  userId: string
  addressId: string
  firstName: string
  lastName: string
  phone: string
  email: string
  address: string
  city: string
  country: string
  zipcode: string
  isDefault: boolean
}

export default function CheckoutForm({ className, showSignIn }: CheckoutFormProps) {
  const [displayAddress, setDisplayAddress] = useState<AddressesType>({} as AddressesType)
  const [addresses, setAddresses] = useState<AddressesType[]>([])
  const [chosenAddressId, setChosenAddressId] = useState<string>('')
  const { setIsContactErrorFree } = useCheckoutStore()

  useEffect(() => {
    const getAddresses = async () => {
      const isSession = await supabase.auth.getSession()
      if (!isSession.data.session) return

      const { data: addresses, error } = await supabase
        .from('clients')
        .select('addresses')
        .eq('client_id', await getUserId())
      if (error) console.error(error)

      if (addresses) {
        return addresses[0].addresses
      }
    }

    getAddresses().then((addresses) => {
      if (addresses) {
        setAddresses(addresses)

        addresses.forEach((address: AddressesType) => {
          if (address.isDefault) {
            setDisplayAddress(address)
            // TODO: set 1st to checked on load
            setIsContactErrorFree(true)
          }
        })
      } else {
        return
      }
    })


  }, [])

  useEffect(() => {
    if (chosenAddressId) {
      const chosenAddress = addresses.find((address) => address.addressId === chosenAddressId)
      if (chosenAddress) {
        setDisplayAddress(chosenAddress)
      }
    }
  }, [chosenAddressId])

  return (
    <div className={`sm:mb-10 xl:mb-[10rem] mx-auto flex w-[90vw] sm:w-[800px] sm:max-w-[90vw] xl:max-w-[800px] flex-col gap-8 ${className}`}>
      {showSignIn && <CheckoutGuestOrAccount />}

      <ContactForm
        addresses={addresses}
        displayAddress={displayAddress}
        setChosenAddressId={setChosenAddressId} />

      <ShippingForm defaultAddress={displayAddress} />

      <PaymentForm defaultAddress={displayAddress} />
    </div>
  )
}
