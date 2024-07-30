import { albert_500 } from "@/utils/fonts"
import { AddressesType } from "./CheckoutForm"
import { borderRadius } from '@/app/components/data/universalStyles'

type CheckoutDifferentAddressListProps = {
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
  addresses: AddressesType[]
  setShowAddresses: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CheckoutDifferentAddressList({ setChosenAddressId, addresses, setShowAddresses }: CheckoutDifferentAddressListProps) {

  const handleClick = (e: React.MouseEvent) => {
    const id = (e.currentTarget as HTMLDivElement).dataset.id
    setChosenAddressId(id as string)
    setShowAddresses(false)
  }

  return addresses.map((address: AddressesType) => (
    <div
      className={`bg-[#f2f2f2] flex flex-col gap-2 ${borderRadius} *:text-[14px] ${albert_500.className} w-[350px] cursor-pointer p-8 text-black`}
      key={address.addressId}
      data-id={address.addressId}
      onClick={handleClick}
    >
      <span>{`${address.firstName} ${address.lastName}`}</span>
      <span>{`${address.phone}`}</span>
      <span className="whitespace-nowrap">{`${address.address}`}</span>
      <span>{`${address.city}`}</span>
      <span>{`${address.country}`}</span>
      <span>{`${address.zipcode}`}</span>
    </div>
  ))
}

