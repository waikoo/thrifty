"use client"
import AnimatedInput from '@/app/components/AnimatedInput'
import { IoCloseOutline } from 'react-icons/io5'
import { useEffect, useRef } from 'react'
import { supabase } from '@/app/supabase'
import { TAddress } from '@/types/shippingAddress'
import { useAddressStore } from '@/state/client/addressState'
import WithCloseButton from '../navigation/WithCloseButton'
import { albert, albert_500, albert_900 } from '@/utils/fonts'

type AddNewAddressFormProps = {
  addressBeingEdited?: string
}

export default function AddNewAddressForm({ addressBeingEdited }: AddNewAddressFormProps) {
  const { setShowAddAddress, firstName, setFirstName, lastName, setLastName, address, setAddress, city, setCity, country, setCountry, zipcode, setZipcode, phone, setPhone, isDefault, setIsDefault, onSubmitAddress } = useAddressStore()
  const outerRef = useRef(null)

  const closePopup = (e: React.MouseEvent) => {
    if (e.target === outerRef.current) {
      setShowAddAddress(false)
    }
  }

  useEffect(() => {
    const getAddress = async () => {
      return await supabase
        .from('clients')
        .select('addresses')
    }
    getAddress().then((data) => {
      const flatArr = data.data?.flatMap((clientObj) => clientObj.addresses) ?? [];
      const targetAddress = flatArr.filter((address: TAddress) => address.addressId === addressBeingEdited)[0]

      if (targetAddress) {
        setFirstName(targetAddress.firstName)
        setLastName(targetAddress.lastName)
        setAddress(targetAddress.address)
        setCity(targetAddress.city)
        setCountry(targetAddress.country)
        setZipcode(targetAddress.zipcode)
        setPhone(targetAddress.phone)
        setIsDefault(targetAddress.isDefault)
      }
    })
  }, [])

  return (

    <WithCloseButton onClose={() => setShowAddAddress(false)} gap='gap-6'>

      <h2 className={`text-center ${albert_900.className} sm:text-[1.3125rem] xl:text-[1.125rem] font-extrabold`}>
        ADD NEW ADDRESS
      </h2>
      <div className="flex sm:flex-row sm:gap-2 flex-col gap-6">
        <AnimatedInput
          type="text"
          id="firstname"
          placeholder="First Name"
          value={firstName}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
        />
        <AnimatedInput
          type="text"
          id="lastname"
          placeholder="Last Name"
          value={lastName}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
        />
      </div>
      <AnimatedInput
        type="text"
        id="address"
        placeholder="Street, Number, Apartment"
        value={address}
        font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
        className="text-[13px] sm:text-[17px] xl:text-[14px]"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
      />
      <div className="flex sm:flex-row sm:gap-2 flex-col gap-6">
        <AnimatedInput
          type="text"
          id="city"
          placeholder="City"
          value={city}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}

        />
        <AnimatedInput
          type="text"
          id="zipcode"
          placeholder="Postal Code"
          value={zipcode}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)}
        />
      </div>
      <div className="flex sm:flex-row sm:gap-2 flex-col gap-6">
        <AnimatedInput
          type="text"
          id="country"
          placeholder="Country"
          value={country}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
        />
        <AnimatedInput
          type="number"
          id="phone"
          placeholder="Phone Number"
          value={phone === 0 ? '' : phone.toString()}
          font={`text-[13px] sm:text-[17px] xl:text-[14px] text-[#9d9d9d] ${albert_500.className}`}
          className="text-[13px] sm:text-[17px] xl:text-[14px]"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(Number(e.target.value))}
        />
      </div>

      <label htmlFor="default_address" className="flex items-center gap-2 text-[0.8125rem] font-semibold self-start">
        <input type="checkbox" checked={isDefault} onChange={() => setIsDefault(!isDefault)} id="default_address" />
        <span className={`${albert.className} text-[13px] sm:text-[17px] xl:text-[0.875rem]`}>Set as default delivery address</span>
      </label>

      <button className={`bg-t_black dark:bg-t_white text-t_white dark:text-t_black mx-auto w-[80%] max-w-[300px] rounded-full py-3 text-[13px] sm:text-[17px] xl:text-[0.875rem] ${albert_500.className}`}
        onClick={() => onSubmitAddress(addressBeingEdited || '')}>
        SAVE
      </button>
    </WithCloseButton>
  )
}
