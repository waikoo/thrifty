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
import useRealtime from "@/app/components/hooks/useRealtime"

type PublishChangesProps = {
  className?: string
  publishSome?: boolean
}

export default function PublishChanges({ className, publishSome }: PublishChangesProps) {
  const { selectedItems: selectedDraftItems } = useDraftStore()
  const { selectedItems: selectedEditedItems } = useEditedStore()
  const realDraftLength = useRealtime('draft').length
  const realEditedLength = useRealtime('edited').length
  const { toggleSelected } = useUIStore()
  const [showPopup, setShowPopup] = useState(false)

  const tableTotal = realDraftLength + realEditedLength
  const mainStyle = tableTotal === 0
    ? 'text-[#f2f2f2]/70 bg-[#151515] border-[#3e3e3e] cursor-not-allowed border-[1px]'
    : 'hover:bg-white hover:text-black border-content cursor-pointer border-[1px]'

  const selectedTotal = selectedDraftItems.length + selectedEditedItems.length

  const publishSelectedText = `Do you want to publish ${selectedTotal} item${selectedTotal > 1 ? 's' : ''}`

  const publishAllText = `Do you want to publish ${tableTotal} item${tableTotal > 1 ? 's' : ''}`

  const onClick = async () => {

    try {
      if (!publishSome || selectedTotal === tableTotal || !toggleSelected) {
        await saveDraftToProducts()
        await updateProductsWithEdited()
        return
      }
      if (realDraftLength === 0) return
      await saveSomeToProducts('draft', selectedDraftItems)
      await saveSomeToProducts('edited', selectedEditedItems)
    } catch (err) {
      console.log(err)
    } finally {
      setShowPopup(false)
      location.reload()
    }
  }

  const popUpHandler = () => {
    if ((realDraftLength + realEditedLength) === 0) return
    setShowPopup(true)
  }

  return (
    <>
      <button
        className={tm(`whitespace-nowrap justify-self-end px-[100px] py-3 font-semibold tracking-wider rounded-[5px] ${mainStyle} ${className}`)}
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
      )}
    </>
  )
}
