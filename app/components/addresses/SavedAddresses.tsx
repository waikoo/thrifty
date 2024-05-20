"use client"
import { borderRadius } from '@/app/components/data/universalStyles'
import { supabase } from '@/app/supabase'
import { useEffect, useState } from 'react'
import AddNewAddressForm from '@/app/components/addresses/AddNewAddressForm'
import { TAddress } from '@/types/shippingAddress'
import { useAddressStore } from '@/state/client/addressState'

type SavedAddressProps = {
  dbAddresses: TAddress[]
}

export default function SavedAddresses({ dbAddresses }: SavedAddressProps) {
  const { deleteAddress, setAsDefault, showEditForm, setShowEditForm } = useAddressStore()
  const [updatedAddresses, setUpdatedAddresses] = useState(dbAddresses)
  const [addressBeingEdited, setAddressBeingEdited] = useState('')

  useEffect(() => {
    const channels = supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'clients' },
        (payload) => {
          setUpdatedAddresses((payload.new as { addresses: TAddress[] }).addresses)
        }
      )
      .subscribe()
  }, [updatedAddresses])


  function handleEdit(addressId: string) {
    setShowEditForm(true)
    setAddressBeingEdited(addressId)
  }

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 overflow-x-auto p-10`}>
        {updatedAddresses.map((address) => (
          <div key={address.addressId} className={`m-5 flex flex-col gap-10 ${borderRadius} xl:min-w-[17rem] p-8 text-[0.8125rem] font-medium text-black bg-[#f2f2f2] ${address.isDefault ? 'border-[0.2rem] border-t_black' : ''}`}>
            <div className="sm:text-[17px] xl:text-[14px]">
              <div className="flex gap-2">
                <span>{address.firstName}</span>
                <span>{address.lastName}</span>
              </div>
              <span className="block">{address.phone}</span>
              <span className="block">{address.address}</span>
              <span className="block">{address.city}</span>
              <span className="block">{address.country}</span>
            </div>

            <div className="*:cursor-pointer flex items-baseline gap-4 font-extrabold sm:text-[17px] xl:text-[14px]">
              <span onClick={() => handleEdit(address.addressId)}>EDIT</span>
              <span onClick={() => deleteAddress(address.addressId, address.userId)}>DELETE</span>
              <span onClick={() => setAsDefault(address.addressId, address.userId)} className={`whitespace-nowrap ${address.isDefault ? 'rounded-full bg-t_mustard p-1 px-2 text-t_black' : ''}`}>
                {address.isDefault ? 'DEFAULT' : 'SET AS DEFAULT'}
              </span>
            </div>
          </div>
        ))}
      </div>
      {showEditForm && <AddNewAddressForm addressBeingEdited={addressBeingEdited} />}
    </>
  )
}
