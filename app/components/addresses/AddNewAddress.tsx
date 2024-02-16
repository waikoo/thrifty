"use client"
import { useAddressStore } from "@/state/uiState";
import { GoPlus } from "react-icons/go";

export default function AddNewAddress() {
  const { setShowAddAddress } = useAddressStore()

  return (
    <div className="border-content flex cursor-pointer flex-col items-center border-b-[0.1rem] py-[2rem]" onClick={() => setShowAddAddress(true)}>
      <GoPlus size={64} />
      <span>ADD NEW ADDRESSES</span>
    </div>
  )
}
