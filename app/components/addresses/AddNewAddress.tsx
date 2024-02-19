"use client"
import { useAddressStore } from "@/state/uiState";
import { GoPlus } from "react-icons/go";

export default function AddNewAddress() {
  const { setShowAddAddress } = useAddressStore()

  return (
    <div className="border-content flex  cursor-pointer flex-col items-center gap-4 border-b-[0.1rem] py-[2rem]" onClick={() => setShowAddAddress(true)}>
      <GoPlus size={32} />
      <span className="text-[0.75rem] font-extrabold">ADD NEW ADDRESSES</span>
    </div>
  )
}
