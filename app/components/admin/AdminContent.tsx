"use client"
import { useStatusBarStore } from "@/state/admin/statusBarState";
import { AdminEditedList, AdminProductList, AdminProductStatus } from "@/app/components/admin";
import { useNewAndEditedPositionStore } from "@/state/admin/newAndEditedPositionState";

export default function AdminContent() {
  const { maximizeNew, maximizeEdited, onTop } = useNewAndEditedPositionStore()
  const { draftLength, editedLength } = useStatusBarStore()

  return (
    <section className={`flex w-full h-[80vh] transition-all duration-300
      ${maximizeNew && maximizeEdited ? 'flex-col-reverse gap-2' :
        maximizeNew ? 'flex-col gap-14' :
          maximizeEdited ? 'flex-col-reverse gap-14' :
            'flex-row gap-2'}`}>

      <div className={`new bg-white relative
        ${maximizeNew && maximizeEdited! && onTop === 'new' ? 'h-[80vh] w-full' :
          maximizeNew ? 'h-[80vh] w-full' :
            maximizeEdited ? 'h-auto w-full' :
              'h-[80vh] w-[50%]'}`}>
        {maximizeNew || !maximizeNew && !maximizeEdited
          && <AdminProductList />}

        <AdminProductStatus length={draftLength}>NEW</AdminProductStatus>
      </div>

      <div className={`edited bg-white relative 
        ${!maximizeNew && maximizeEdited && onTop === 'edited' ? 'h-[80vh] w-full' :
          maximizeNew ? 'h-auto w-full' :
            maximizeEdited ? 'h-[80vh] w-full' :
              'h-[80vh] w-[50%]'}`}>
        {maximizeEdited || !maximizeEdited && !maximizeNew
          && <AdminEditedList />}

        <AdminProductStatus length={editedLength}>EDITED</AdminProductStatus>
      </div>

    </section>
  )

}

