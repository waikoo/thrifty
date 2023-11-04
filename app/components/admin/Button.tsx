"use client"
import { useUIStore } from "@/state";
import { useProductStore } from "@/state/productState"
import { usePathname, useRouter } from 'next/navigation';

export default function Button() {
  const { isSaved, setIsSaved } = useUIStore();
  const { saveDraft } = useProductStore()
  const router = useRouter()

  return (
    <button
      className={`adminBorder w-16 mx-auto py-3 px-24 items-center justify-center flex`}
      onClick={() => {
        saveDraft()
        setIsSaved(!isSaved)
        router.refresh()
      }}
    >
      SAVE
    </button>
  )
}
