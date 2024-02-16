"use client"
import AddNewAddress from "@/app/components/addresses/AddNewAddress"
import AddNewAddressForm from "@/app/components/addresses/AddNewAddressForm"
import NoSavedAddress from "@/app/components/addresses/NoSavedAddress"
import { useAddressStore } from "@/state/uiState"
import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {
  const { showAddAddress, savedAddresses } = useAddressStore()
  console.log(savedAddresses.length)

  return (
    <main className="text-content">
      <AddNewAddress />

      {savedAddresses.length === 0 ? <NoSavedAddress /> : (
        savedAddresses.map((address) => (
          <>
            <div key={address.zipcode + 'zipcode'} className="">
              <span>{address.firstName}</span>
              <span>{address.lastName}</span>
              <span>{address.phone}</span>
              <span>{address.address}</span>
              <span>{address.city}</span>
              <span>{address.country}</span>
            </div>

            <span>EDIT</span>
            <span>DELETE</span>
            <span>DEFAULT</span>
          </>
        ))
      )}

      {showAddAddress && <AddNewAddressForm />}
    </main>
  )
}
