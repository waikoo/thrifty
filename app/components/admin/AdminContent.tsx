"use client"
import { AdminEditedList, AdminProductList, AdminProductStatus } from ".";
import { useUIStore } from "@/state";

export default function AdminContent() {
  const { maximizeNew, maximizeEdited, draftLength, editedLength, onTop } = useUIStore()

  return (
    <section className={`text-bkg flex w-full h-[80vh]
      ${maximizeNew && maximizeEdited ? 'flex-col-reverse gap-2' :
        maximizeNew ? 'flex-col gap-14' :
          maximizeEdited ? 'flex-col-reverse gap-14' :

            'flex-row gap-2'}`}>

      <div className={`new bg-content relative
        ${maximizeNew && maximizeEdited! && onTop === 'new' ? 'h-[80vh] w-full' :
          maximizeNew ? 'h-[80vh] w-full' :
            maximizeEdited ? 'h-auto w-full' :
              'h-[80vh] w-[50%]'}`}>
        {maximizeNew || !maximizeNew && !maximizeEdited
          && <AdminProductList />}

        <AdminProductStatus length={draftLength}>NEW</AdminProductStatus>
      </div>

      <div className={`edited bg-content relative 
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

