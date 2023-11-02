"use client"
import { useProductStore } from "@/state/productState"

export default function Button() {
  const { saveDraft } = useProductStore()

  return (
    <button
      className={`adminBorder w-16 mx-auto py-3 px-24 items-center justify-center flex`}
      onClick={saveDraft}
    >
      SAVE
    </button>
  )
}
