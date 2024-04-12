"use client"
import { useEffect, useState } from "react";

import { supabase } from "@/app/supabase";
import ContactForm from "@/app/components/checkout/ContactForm";
import ShippingForm from "@/app/components/checkout/ShippingForm";
import PaymentForm from "@/app/components/checkout/PaymentForm";

type CheckoutFormProps = {
  className: string
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

export default function CheckoutForm({ className }: CheckoutFormProps) {
  const [displayAddress, setDisplayAddress] = useState<AddressesType>({} as AddressesType)
  const [addresses, setAddresses] = useState<AddressesType[]>([])
  const [chosenAddressId, setChosenAddressId] = useState<string>('')

  useEffect(() => {
    const getUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.id
    }
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
      setAddresses(addresses)

      addresses.forEach((address: AddressesType) => {
        if (address.isDefault) {
          setDisplayAddress(address)
        }
      })
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
    <div className={`mb-[10rem] flex w-[800px] flex-col gap-8 ${className}`}>
      <ContactForm
        addresses={addresses}
        displayAddress={displayAddress}
        setChosenAddressId={setChosenAddressId} />

      <ShippingForm defaultAddress={displayAddress} />

      <PaymentForm />
    </div>
  )
}
