"use client"
import { useAddressStore } from "@/state/client/addressState";
import { albert_900 } from "@/utils/fonts";
import { GoPlus } from "react-icons/go";

export default function AddNewAddress() {
  const { setShowAddAddress } = useAddressStore()

  return (
    <div className="flex flex-col items-center gap-4 border-b-[0.1rem] border-[#c2c2c2] pb-6">
      <div className="mt-10 w-[60px] h-[60px] bg-t_mustard flex items-center justify-center cursor-pointer border-b-[0.1rem] py-[2rem] rounded-full" onClick={() => setShowAddAddress(true)}>
        <GoPlus size={38} />
      </div>
      <span className={`text-[0.8125rem] ${albert_900.className}`}>ADD NEW ADDRESS</span>
    </div>
  )
}
