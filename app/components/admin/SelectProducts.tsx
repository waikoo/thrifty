"use client"
import { supabase } from "@/app/supabase"
import { useDraftStore, useEditedStore, useUIStore } from "@/state"
import { useState } from "react"
import Portal from "./Portal"
import { Popup } from "../generic"

export default function SelectProducts() {
  const { toggleSelected, setToggleSelected, draftLength } = useUIStore()
  const { selectedItems: selectedDraft } = useDraftStore()
  const { selectedItems: selectedEdited } = useEditedStore()
  const [showPopup, setShowPopup] = useState(false)
  const mainStyle = draftLength > 0 ? 'text-content cursor-pointer' : 'text-grey cursor-not-allowed'

  const deleteSelected = async () => {
    selectedDraft.forEach(async (uuid) => {
      const { data, error } = await supabase
        .from('draft')
        .delete()
        .match({ uuid: uuid });

      if (error) {
        console.log('Error deleting draft row:', error.message);
      } else {
        console.log('Draft row deleted successfully:', data);
      }
    });
    selectedEdited.forEach(async (uuid) => {
      const { data, error } = await supabase
        .from('edited')
        .delete()
        .match({ uuid: uuid });

      if (error) {
        console.log('Error deleting edited row:', error.message);
      } else {
        console.log('Edited row deleted successfully:', data);
      }
    });
    console.log('All rows deleted successfully');
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
                Do you want to delete {selectedDraft.length + selectedEdited.length} item{selectedDraft.length + selectedEdited.length > 1 ? 's' : ''}?</Popup>
            </Portal>

          )}
        </>
      )}
    </div>
  )
}
