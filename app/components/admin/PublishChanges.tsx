"use client"
import { useDraftStore, useUIStore } from "@/state"
import { saveDraftToProducts } from "@/utils/saveDraftToProducts"
import { saveSomeToProducts } from "@/utils/saveSomeToProducts"
import { useRouter } from "next/navigation"
import { twMerge as tm } from "tailwind-merge"

type PublishChangesProps = {
  className?: string
  publishSome?: boolean
}

export default function PublishChanges({ className, publishSome }: PublishChangesProps) {
  const { selectedItems } = useDraftStore()
  const { draftLength } = useUIStore()
  const router = useRouter()
  const mainStyle = publishSome && draftLength === 0
    ? 'text-grey border-grey cursor-not-allowed border-2'
    : 'hover:bg-content hover:text-bkg text-content border-content cursor-pointer border-2'

  const onClick = async () => {
    if (!publishSome) {
      await saveDraftToProducts()
      return
    }
    if (draftLength === 0) return
    await saveSomeToProducts(selectedItems)
    router.refresh()
  }

  return (
    <button
      className={tm(`bg-bkg whitespace-nowrap justify-self-end px-12 py-3 font-semibold tracking-wider ${mainStyle} ${className}`)}
      onClick={onClick}
    >
      PUBLISH CHANGES
    </button>
  )
}
