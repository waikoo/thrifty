import { useState } from "react";

import { FaRegBell } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";

import { supabase } from "@/app/supabase";
import { TSavedFilters } from "@/types/filters"
import { useFilterStore } from "@/state/client/filterState";
import ToastNotification from "@/app/components/generic/ToastNotification";

type SavedFiltersListOptionsProps = {
  filter: TSavedFilters
  client_id: string
  color: string
}

export default function SavedFiltersListOptions({ filter, client_id, color }: SavedFiltersListOptionsProps) {
  const { changeNotification, deleteFilter, setEditingFilterId, setShowSavedFiltersPopup, setShowNewFilterPopup } = useFilterStore()
  const [isToggleClicked, setIsToggleClicked] = useState(false)
  const [toastStatus, setToastStatus] = useState<'activated' | 'deactivated' | null>(null)

  const channels = supabase.channel('custom-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'clients' },
      (payload) => {
        console.log(payload.new.filters)
        setToastStatus(payload.new.filters ? 'activated' : 'deactivated')

        setTimeout(() => {
          setIsToggleClicked(false)
        }, 3000)
      }
    )
    .subscribe()

  const handleEdit = (filterId: string) => {
    setShowSavedFiltersPopup(false)
    setShowNewFilterPopup(true)
    setEditingFilterId(filterId)
  }

  return (
    <>
      <div onClick={() => handleEdit(filter.filterId)} >
        <MdEdit
          color={color}
          className="cursor-pointer"
          title="Edit Filter"
        />
      </div>

      <div
        className="cursor-pointer"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation()
          setIsToggleClicked(true)
          changeNotification(client_id)
        }}
      >
        {toastStatus === 'activated' ? (
          <IoMdNotifications
            color={color}
            title="Send Notification"
          />
        ) : (
          <FaRegBell
            color={color}
            title="No Notification"
          />
        )}
      </div>

      <RxCross1
        color={color}
        className="cursor-pointer"
        onClick={() => deleteFilter(filter.filterId, client_id)}
        title="Delete Filter"
      />

      {isToggleClicked && (
        <ToastNotification>Notifications successfully {toastStatus}.</ToastNotification>
      )}
    </>
  )
}

