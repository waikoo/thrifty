"use client"
import { useUIStore } from "@/state";
import { useProductStore } from "@/state/productState"

export default function Button() {
  const { isSaved, setIsSaved } = useUIStore();
  const { saveDraft } = useProductStore()

  return (
    <button
      className={"border-content text-content hover:text-bkg hover:bg-content col-span-2 mx-auto mt-10 flex w-16 items-center justify-center border-[0.1rem] px-24 py-3 text-[0.8125rem] font-semibold"}
      onClick={() => {
        saveDraft()
        setIsSaved(!isSaved)
      }}
    >
      SAVE
    </button>
  )
}
