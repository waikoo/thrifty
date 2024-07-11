import { useState } from "react";

import { FaRegBell } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";

import { supabase } from "@/app/supabase";
import { TSavedFilters } from "@/types/filters"
import { useFilterStore } from "@/state/client/filterState";
import ToastNotification from "@/app/components/generic/ToastNotification";
import WithCloseButton from "@/app/components/navigation/WithCloseButton";
import { albert_500 } from "@/utils/fonts";

type SavedFiltersListOptionsProps = {
  filter: TSavedFilters
  client_id: string
  color: string
}

export default function SavedFiltersListOptions({ filter, client_id, color }: SavedFiltersListOptionsProps) {
  const { changeNotification, deleteFilter, setEditingFilterId, setShowSavedFiltersPopup, setShowNewFilterPopup } = useFilterStore()
  const [isToggleClicked, setIsToggleClicked] = useState(false)
  const [toastStatus, setToastStatus] = useState<'activated' | 'deactivated' | null>(null)
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  const channels = supabase.channel('custom-update-channel')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'clients' },
      (payload) => {
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

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLDivElement
    e.stopPropagation()

    if (target.textContent === 'DELETE') {
      deleteFilter(filter.filterId, client_id)
    }

    setShowConfirmDelete(false)
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
        onClick={(e) => {
          e.stopPropagation()
          setShowConfirmDelete(true)
        }}
        title="Delete Filter"
      />

      {showConfirmDelete && (
        <WithCloseButton onClose={() => setShowConfirmDelete(false)} padding="p-6 px-8">
          <p className={`w-[80%] xl:w-[75%] text-center mx-auto sm:text-[18px] xl:text-[14px] ${albert_500.className}`}>
            Are you sure you want to delete this filter?
          </p>
          <div className="flex justify-between xl:gap-4 mt-4">
            <button className="p-2 px-11 rounded-full sm:text-[17px] xl:text-[14px] text-t_black bg-t_white border-[0.1rem] border-t_black"
              onClick={handleDelete}>
              CANCEL
            </button>

            <button className="p-2 px-11 rounded-full sm:text-[17px] xl:text-[14px] text-t_white bg-t_black border-[0.1rem] border-t_black"
              onClick={handleDelete}>
              DELETE
            </button>
          </div>
        </WithCloseButton>
      )}

      {isToggleClicked && (
        <ToastNotification>Notifications successfully {toastStatus}.</ToastNotification>
      )}
    </>
  )
}

