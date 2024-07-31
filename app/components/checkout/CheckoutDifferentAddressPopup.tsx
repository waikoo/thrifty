'use client'
import { AddressesType } from '@/app/components/checkout/CheckoutForm'
import CheckoutDifferentAddressList from './CheckoutDifferentAddressList'
import { albert_800 } from '@/utils/fonts'

type CheckoutDifferentAddressPopupProps = {
  addresses: AddressesType[]
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
  setShowAddresses: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CheckoutDifferentAddressPopup({
  addresses,
  setChosenAddressId,
  setShowAddresses,
}: CheckoutDifferentAddressPopupProps) {

  return (
    <div className="scrollbar scrollbar-thumb-darkgrey scrollbar-thumb-rounded-full relative flex h-[60vh] flex-col gap-8 overflow-y-scroll opacity-100">
      <h1 className={`text-t_black text-center sm:text-[17px] xl:text-[14px] ${albert_800.className}`}>
        CHOOSE CONTACT
      </h1>

      <CheckoutDifferentAddressList
        addresses={addresses}
        setChosenAddressId={setChosenAddressId}
        setShowAddresses={setShowAddresses} />

    </div>
  )
}
