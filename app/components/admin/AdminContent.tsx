"use client"
import { useStatusBarStore } from "@/state/admin/statusBarState";
import { AdminEditedList, AdminProductList, AdminProductStatus } from "@/app/components/admin";
import { useNewAndEditedPositionStore } from "@/state/admin/newAndEditedPositionState";

export default function AdminContent() {
  const { maximizeNew, maximizeEdited, onTop } = useNewAndEditedPositionStore()
  const { draftLength, editedLength } = useStatusBarStore()
  const paneHeight = 'h-[75vh]'

  return (
    <section className={`flex w-full ${paneHeight} transition-all duration-300
      ${maximizeNew && maximizeEdited ? 'flex-col-reverse gap-2' :
        maximizeNew ? 'flex-col gap-14' :
          maximizeEdited ? 'flex-col-reverse gap-14' :
            'flex-row gap-2'}`}>

      <div className={`new bg-white relative rounded-tl-[3px] rounded-bl-[3px]
        ${maximizeNew && maximizeEdited! && onTop === 'new' ? `${paneHeight} w-full` :
          maximizeNew ? `${paneHeight} w-full` :
            maximizeEdited ? 'h-auto w-full' :
              `${paneHeight} w-[50%]`}`}>
        {maximizeNew || !maximizeNew && !maximizeEdited
          && <AdminProductList />}

        <AdminProductStatus length={draftLength}>NEW</AdminProductStatus>
      </div>

      <div className={`edited bg-white relative rounded-tr-[3px] rounded-br-[3px]
        ${!maximizeNew && maximizeEdited && onTop === 'edited' ? `${paneHeight} w-full` :
          maximizeNew ? 'h-auto w-full' :
            maximizeEdited ? `${paneHeight} w-full` :
              `${paneHeight} w-[50%]`}`}>
        {maximizeEdited || !maximizeEdited && !maximizeNew
          && <AdminEditedList />}

        <AdminProductStatus length={editedLength}>EDITED</AdminProductStatus>
      </div>

    </section>
  )
}

