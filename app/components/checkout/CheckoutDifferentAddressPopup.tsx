import { AddressesType } from "./CheckoutForm";
import { borderRadius } from "@/app/components/data/universalStyles";

type CheckoutDifferentAddressPopupProps = {
  addresses: AddressesType[]
  setChosenAddressId: React.Dispatch<React.SetStateAction<string>>
  setShowAddresses: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CheckoutDifferentAddressPopup({ addresses, setChosenAddressId, setShowAddresses }: CheckoutDifferentAddressPopupProps) {

  const handleClick = (e: React.MouseEvent) => {
    const id = (e.currentTarget as HTMLDivElement).dataset.id
    setChosenAddressId(id as string)
    setShowAddresses(false)
  }

  return (
    <section className="text-bkg absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-bkg min-w-content scrollbar flex flex-col gap-6 p-14 opacity-100">
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
