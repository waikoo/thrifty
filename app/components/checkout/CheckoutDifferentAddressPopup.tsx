"use client"
import { AddressesType } from "@/app/components/checkout/CheckoutForm";
import { borderRadius } from "@/app/components/data/universalStyles";
import { useRef } from "react";

type CheckoutDifferentAddressPopupProps = {
  addresses: AddressesType[]
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
  setShowAddresses: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CheckoutDifferentAddressPopup({ addresses, setChosenAddressId, setShowAddresses }: CheckoutDifferentAddressPopupProps) {
  const sectionRef = useRef(null)

  const handleClick = (e: React.MouseEvent) => {
    const id = (e.currentTarget as HTMLDivElement).dataset.id
    setChosenAddressId(id as string)
    setShowAddresses(false)
  }

  const handleClosePopup = (e: React.MouseEvent) => {
    if (e.target === sectionRef.current) {
      setShowAddresses(false)
    }
  }
  return (
    <section className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]" onClick={handleClosePopup} ref={sectionRef}>
      <div className="bg-bkg min-w-content scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded-full relative flex h-[60vh] flex-col gap-8 overflow-y-scroll px-14 py-10 opacity-100">
        <span className="absolute right-10 top-5 cursor-pointer text-right text-white" onClick={() => setShowAddresses(false)}>X</span>
        <h1 className="text-content text-center text-[1rem] font-extrabold">CHOOSE CONTACT</h1>
        {addresses.map((address: AddressesType) => (
          <div className={`bg-faded flex flex-col gap-2 ${borderRadius} *:text-[0.8125rem] *:font-medium w-[25rem] cursor-pointer p-8 text-black`} key={address.addressId} data-id={address.addressId} onClick={handleClick}>
            <span>{`${address.firstName} ${address.lastName}`}</span>
            <span>{`${address.phone}`}</span>
            <span className="whitespace-nowrap">{`${address.address}`}</span>
            <span>{`${address.city}`}</span>
            <span>{`${address.country}`}</span>
            <span>{`${address.zipcode}`}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
