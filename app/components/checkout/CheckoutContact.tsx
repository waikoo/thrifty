import { useEffect, useRef, useState } from "react"

import { useCheckoutStore } from "@/state/client/checkoutState"
import { albert_500 } from "@/utils/fonts"
import { MdError } from "react-icons/md"

type CheckoutContactProps = {
  type: string
  text: string
  id: 'firstname' | 'lastname' | 'phone' | 'email' | 'address' | 'city' | 'country' | 'zipcode'
  title: 'CONTACT' | 'SHIPPING' | 'PAYMENT'
  defaultValue: string
  isBlockHidden: boolean
}

export default function CheckoutContact({ type, text, id, title, defaultValue, isBlockHidden }: CheckoutContactProps) {
  const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, address, setAddress, city, setCity, country, setCountry, zipcode, setZipcode, setIsContactErrorFree, setIsShippingErrorFree } = useCheckoutStore()
  const [focusLost, setFocusLost] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)

  const invalidStyle = focusLost && isEmpty && 'invalid:border-red-500'
  const textStyle = isBlockHidden ? 'text-gray-500' : 'text-t_black';
  const borderStyle = isBlockHidden ? 'border-b-t_black/30' : 'border-b-t_black';
  const bgStyle = isBlockHidden ? 'bg-white/20' : 'bg-white';
  const labelTextStyle = isBlockHidden ? 'text-gray-300' : 'text-gray-600';
  const errorMsgStyle = isBlockHidden ? 'text-red-500/20' : 'text-red-500';
  const errorMsgColor = isBlockHidden ? "pink" : "red";

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
  const labelPlaceholderShownText = isBlockHidden ? 'peer-placeholder-shown:text-[#616161]/50' : 'peer-placeholder-shown:text-[#616161]';
  return (
    <div className={`relative flex w-full flex-col ${albert_500.className}`}>
      <input
        className={`text-[13px] ${textStyle} sm:text-[17px] xl:text-[12px] ${borderStyle} ${invalidStyle} ${bgStyle} peer border-x-0 border-b-[0.1rem] border-t-0 border-solid pl-0 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0`}
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
        className={`text-[13px] sm:text-[17px] xl:text-[12px] absolute -top-3.5 left-0 ${labelTextStyle} transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base ${labelPlaceholderShownText} peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#616161]`}
        htmlFor={id}>
        {text}
      </label>
      {focusLost && isEmpty && (
        <span className={`mt-1 flex gap-2 items-center ${errorMsgStyle}`}>
          <MdError color={`${errorMsgColor}`} className={``} />
          Please enter your {text.toLowerCase()}
        </span>)}
    </div>
  )
}
