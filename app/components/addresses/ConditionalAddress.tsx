"use client"
import AddNewAddressForm from "@/app/components/addresses/AddNewAddressForm"
import NoSavedAddress from "@/app/components/addresses/NoSavedAddress"
import SavedAddresses from "@/app/components/addresses/SavedAddresses"
import { useAddressStore } from "@/state/client/addressState"
import { TAddress } from "@/types/shippingAddress"

type ConditionalAddressProps = {
  dbAddresses: TAddress[]
}

export default function ConditionalAddress({ dbAddresses }: ConditionalAddressProps) {
  const { showAddAddress } = useAddressStore()

  return (
    <>
      {dbAddresses.length === 0
        ? <NoSavedAddress />
        : <SavedAddresses dbAddresses={dbAddresses}
        />}

      {showAddAddress && <AddNewAddressForm />}
    </>
  )
}
