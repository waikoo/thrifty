"use client"
import { useDraftStore, useUIStore } from "@/state"
import { saveDraftToProducts } from "@/utils/saveDraftToProducts"
import { saveSomeToProducts } from "@/utils/saveSomeToProducts"
import { useRouter } from "next/navigation"
import { twMerge as tm } from "tailwind-merge"
import Portal from "./Portal"
import { useState } from "react"
import { Popup } from "../generic"

type PublishChangesProps = {
  className?: string
  publishSome?: boolean
}

export default function PublishChanges({ className, publishSome }: PublishChangesProps) {
  const { selectedItems } = useDraftStore()
  const { draftLength } = useUIStore()
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()
  const mainStyle = draftLength === 0
    ? 'text-grey border-grey cursor-not-allowed border-2'
    : 'hover:bg-content hover:text-bkg text-content border-content cursor-pointer border-2'

  const onClick = async () => {
    if (!publishSome) {
      await saveDraftToProducts()
      return
    }
    if (draftLength === 0) return
    await saveSomeToProducts(selectedItems)
    setShowPopup(false)
    router.refresh()
  }

  const popUpHandler = () => {
    if (draftLength === 0) return
    setShowPopup(true)
  }

  return (
    <>
      <button
        className={tm(`bg-bkg whitespace-nowrap justify-self-end px-12 py-3 font-semibold tracking-wider ${mainStyle} ${className}`)}
        onClick={popUpHandler}
      >
        PUBLISH CHANGES
      </button>

      {showPopup && (
        <Portal>
          <Popup
            option1={{ value: "PUBLISH", function: onClick }}
            option2={{ value: "CANCEL", function: () => setShowPopup(false) }}
          >
            Do you want to publish {draftLength} item{draftLength > 1 ? 's' : ''}?</Popup>
        </Portal>
      )
      }
    </>
  )
}
