"use client"
import { TAddress, useAddressStore } from '@/state/uiState'
import { borderRadius } from '@/app/components/data/universalStyles'

type SavedAddressProps = {
  dbAddresses: TAddress[]
}

export default function SavedAddresses({ dbAddresses }: SavedAddressProps) {
  const { deleteAddress, setAsDefault } = useAddressStore()

  return (
    <div className={`flex gap-4 overflow-x-auto`}>
      {dbAddresses.map((address) => (
        <div key={address.addressId} className={`bg-faded m-5 flex flex-col gap-10 ${borderRadius} min-w-[10rem] p-6 text-[0.8125rem] font-medium text-black`}>
          <div className="">
            <div className="flex gap-2">
              <span>{address.firstName}</span>
              <span>{address.lastName}</span>
            </div>
            <span className="block">{address.phone}</span>
            <span className="block">{address.address}</span>
            <span className="block">{address.city}</span>
            <span className="block">{address.country}</span>
          </div>

          <div className="*:cursor-pointer flex gap-4 text-[0.75rem] font-extrabold">
            <span>EDIT</span>
            <span onClick={() => deleteAddress(address.addressId, address.userId)}>DELETE</span>
            <span onClick={() => setAsDefault(address.addressId, address.userId)} className="whitespace-nowrap">
              {address.isDefault ? 'DEFAULT' : 'SET AS DEFAULT'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
