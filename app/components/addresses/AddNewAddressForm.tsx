"use client"
import AnimatedInput from '@/app/components/AnimatedInput'
import { IoCloseOutline } from 'react-icons/io5'
import { useEffect, useRef } from 'react'
import { supabase } from '@/app/supabase'
import { TAddress } from '@/types/shippingAddress'
import { useAddressStore } from '@/state/client/addressState'

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
    <div className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]" ref={outerRef} onClick={closePopup}>
      <div className="bg-content relative flex w-[450px] flex-col gap-6 p-7 opacity-100">
        <IoCloseOutline color='black' size={25} className="absolute right-1 top-1 cursor-pointer" onClick={() => setShowAddAddress(false)} />

        <h2 className="text-center text-[1rem] font-extrabold">ADD ADDRESS</h2>
        <div className="flex gap-2">
          <AnimatedInput
            type="text"
            id="firstname"
            placeholder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />
          <AnimatedInput
            type="text"
            id="lasttname"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />
        </div>
        <div className="block">
          <AnimatedInput
            type="text"
            id="address"
            placeholder="Street, Number, Apartment"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <AnimatedInput
            type="text"
            id="city"
            placeholder="City"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}

          />
          <AnimatedInput
            type="text"
            id="zipcode"
            placeholder="Postal Code"
            value={zipcode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <AnimatedInput
            type="text"
            id="country"
            placeholder="Country"
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
          />
          <AnimatedInput
            type="number"
            id="phone"
            placeholder="Phone Number"
            value={phone === 0 ? '' : phone.toString()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(Number(e.target.value))}
          />
        </div>
        <label htmlFor="default_address" className="flex items-center gap-2 text-[0.8125rem] font-semibold">
          <input type="checkbox" checked={isDefault} onChange={() => setIsDefault(!isDefault)} id="default_address" />
          <span>Set as default delivery address</span>
        </label>
        <button className="bg-bkg text-content mx-auto w-[80%] rounded-full py-4 text-[0.8125rem] font-semibold" onClick={() => onSubmitAddress(addressBeingEdited || '')}>SAVE</button>
      </div>
    </div>
  )
}
