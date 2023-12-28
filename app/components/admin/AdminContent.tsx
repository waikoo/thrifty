"use client"
import { useTable } from "../hooks";
import { AdminProductList, AdminProductStatus } from ".";
import { useUIStore } from "@/state";

export default function AdminContent() {
  const draft = useTable('draft')
  const { maximizeNew, maximizeEdited } = useUIStore()

  return (<>
    {/* <div id="popup-root"></div> */}
    <div className={`text-bkg flex h-auto w-full
      ${maximizeNew ? 'flex-col gap-14' :
        maximizeEdited ? 'flex-col-reverse gap-14' :
          'flex-row gap-2'}`}>

      <div className={`bg-content relative
        ${maximizeNew ? 'h-[70vh] w-full' :
          maximizeEdited ? 'h-auto w-full' :
            'h-[80vh] w-[50%]'}`}>
        {maximizeNew || !maximizeNew && !maximizeEdited
          && <AdminProductList draft={draft} />}

        <AdminProductStatus draft={draft}>NEW</AdminProductStatus>
      </div>

      <div className={`bg-content relative 
        ${maximizeNew ? 'h-auto w-full' :
          maximizeEdited ? 'h-[70vh] w-full' :
            'h-[80vh] w-[50%]'}`}>
        <AdminProductStatus>EDITED</AdminProductStatus>
      </div>

    </div>
  </>)

}

