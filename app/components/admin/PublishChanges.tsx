"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { twMerge as tm } from "tailwind-merge"

import { saveDraftToProducts } from "@/db/saveDraftToProducts"
import { saveSomeToProducts } from "@/db/saveSomeToProducts"
import Portal from "@/app/components/generic/Portal"
import { Popup } from "@/app/components/generic"
import { updateProductsWithEdited } from "@/db/updateProductsWithEdited"
import { useDraftStore, useEditedStore } from "@/state/admin/adminSelectState"
import { useUIStore } from "@/state/admin/uiState"
import { useStatusBarStore } from "@/state/admin/statusBarState"

type PublishChangesProps = {
  className?: string
  publishSome?: boolean
}

export default function PublishChanges({ className, publishSome }: PublishChangesProps) {
  const { selectedItems: selectedDraftItems } = useDraftStore()
  const { selectedItems: selectedEditedItems } = useEditedStore()
  const { draftLength, editedLength } = useStatusBarStore()
  const { toggleSelected } = useUIStore()
  const [showPopup, setShowPopup] = useState(false)
  const router = useRouter()

  const mainStyle = draftLength + editedLength === 0
    ? 'text-grey border-grey cursor-not-allowed border-2'
    : 'hover:bg-content hover:text-bkg text-content border-content cursor-pointer border-2'

  const selectedTotal = selectedDraftItems.length + selectedEditedItems.length
  const tableTotal = draftLength + editedLength

  const publishSelectedText = `Do you want to publish ${selectedTotal} item${selectedTotal > 1 ? 's' : ''}`

  const publishAllText = `Do you want to publish ${tableTotal} item${tableTotal > 1 ? 's' : ''}`

  const onClick = async () => {

    if (!publishSome || selectedTotal === tableTotal || !toggleSelected) {
      await saveDraftToProducts()
      await updateProductsWithEdited()
      return
    }
    if (draftLength === 0) return
    await saveSomeToProducts('draft', selectedDraftItems)
    await saveSomeToProducts('edited', selectedEditedItems)
    setShowPopup(false)
    router.refresh()
  }

  const popUpHandler = () => {
    if ((draftLength + editedLength) === 0) return
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
            {!toggleSelected ? publishAllText : publishSelectedText}
            ?</Popup>
        </Portal>
      )
      }
    </>
  )
}
