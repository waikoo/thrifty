"use client"
import { supabase } from "@/app/supabase"
import { useDraftStore, useUIStore } from "@/state"
import { useState } from "react"
import Portal from "./Portal"
import { Popup } from "../generic"

export default function SelectProducts() {
  const { toggleSelected, setToggleSelected } = useUIStore()
  const { selectedItems } = useDraftStore()
  const { draftLength } = useUIStore()
  const mainStyle = draftLength > 0 ? 'text-content cursor-pointer' : 'text-grey cursor-not-allowed'
  const [showPopup, setShowPopup] = useState(false)

  const deleteSelected = async () => {
    selectedItems.forEach(async (uuid) => {
      const { data, error } = await supabase
        .from('draft')
        .delete()
        .match({ uuid: uuid });

      if (error) {
        console.log('Error deleting row:', error.message);
      } else {
        console.log('Row deleted successfully:', data);
      }
      console.log('All rows deleted successfully');
    });
    setShowPopup(false)
  }

  const selectHandler = () => {
    if (draftLength === 0) return

    setToggleSelected(!toggleSelected)
  }

  return (
    <div className="flex items-baseline gap-4 text-[0.8125rem] font-semibold">
      <span
        className={`text-bold w-content underline underline-offset-4 ${mainStyle}`}
        onClick={selectHandler}
      >
        {!toggleSelected ? 'SELECT' : 'CANCEL'}
      </span>

      {toggleSelected && (
        <>
          <span
            className="text-bkg bg-content cursor-pointer p-1"
            onClick={() => setShowPopup(true)}
          >
            DELETE SELECTED
          </span>

          {showPopup && (
            <Portal>
              <Popup
                option1={{ value: "DELETE", function: deleteSelected }}
                option2={{ value: "CANCEL", function: () => setShowPopup(false) }}
              >
                Do you want to delete {draftLength} item{draftLength > 1 ? 's' : ''}?</Popup>
            </Portal>

          )}
        </>
      )}
    </div>
  )
}
