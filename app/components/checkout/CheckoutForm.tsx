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
  const [defaultAddress, setDefaultAddress] = useState<AddressesType>({} as AddressesType)

  useEffect(() => {
    const getAddresses = async () => {
      const { data: addresses, error } = await supabase
        .from('clients')
        .select('addresses')
      if (error) console.error(error)

      if (addresses) {
        return addresses[0].addresses
      }
      return []
    }
    getAddresses().then((addresses) => {
      // console.log(addresses)
      addresses.forEach((address: AddressesType) => {
        if (address.isDefault) {
          setDefaultAddress(address)
        }
      })
    })
  }, [])


  console.log(defaultAddress)
  return (
    <div className={`mb-[10rem] flex w-[800px] flex-col gap-8 ${className}`}>
      <ContactForm defaultAddress={defaultAddress} />

      <ShippingForm defaultAddress={defaultAddress} />

      <PaymentForm />
    </div>
  )
}
