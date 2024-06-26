import { useEffect, useRef, useState } from "react"

import { useCheckoutStore } from "@/state/client/checkoutState"

type CheckoutContactProps = {
  type: string
  text: string
  id: 'firstname' | 'lastname' | 'phone' | 'email' | 'address' | 'city' | 'country' | 'zipcode'
  activeBg: string
  title: 'CONTACT' | 'SHIPPING' | 'PAYMENT'
  defaultValue: string
}

export default function CheckoutContact({ type, text, id, activeBg, title, defaultValue }: CheckoutContactProps) {
  const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, address, setAddress, city, setCity, country, setCountry, zipcode, setZipcode, setIsContactErrorFree, setIsShippingErrorFree } = useCheckoutStore()
  const [focusLost, setFocusLost] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const invalidStyle = focusLost && isEmpty && 'invalid:border-red'

  const handleOnChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    if (target.value) {
      setIsEmpty(false)
    }

    if (id === "firstname") setFirstName(target.value)
    if (id === "lastname") setLastName(target.value)
    if (id === "phone") setPhone(target.value)
    if (id === "email") setEmail(target.value)
    if (id === "address") setAddress(target.value)
    if (id === "city") setCity(target.value)
    if (id === "country") setCountry(target.value)
    if (id === "zipcode") setZipcode(target.value)

    if (title === 'CONTACT') {
      if (firstName && lastName && phone && email) {
        setIsContactErrorFree(true)
      } else {
        setIsContactErrorFree(false)
      }
    }

    if (title === 'SHIPPING') {
      if (address && city && country && zipcode) {
        setIsShippingErrorFree(true)
      } else {
        setIsShippingErrorFree(false)
      }
    }

  }

  useEffect(() => {
    if (isEmpty) {
      if (title === 'CONTACT') setIsContactErrorFree(false)
      if (title === 'SHIPPING') setIsShippingErrorFree(false)
    }
  }, [isEmpty])

  const values = {
    firstname: firstName,
    lastname: lastName,
    phone: phone,
    email: email,
    address: address,
    city: city,
    country: country,
    zipcode: zipcode
  }

  const handleOnBlur = () => {
    setFocusLost(true)
  }

  const handleOnFocus = () => {
    setFocusLost(false)
  }

  return (
    <div className="relative flex w-full flex-col">
      <input
        className={`${activeBg} bg-bkg border-b-content ${invalidStyle} peer border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0`}
        id={id}
        type={type}
        placeholder={text}
        value={defaultValue || values[id]}
        onChange={handleOnChange}
        spellCheck="false"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        required
      />
      <label
        className="absolute -top-3.5 left-0 text-gray-600 transition-all  peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-100"
        htmlFor={id}>
        {text}
      </label>
      {focusLost && isEmpty && (
        <span className="text-red mt-1">Please enter your {text.toLowerCase()}</span>)}
    </div>
  )
}
