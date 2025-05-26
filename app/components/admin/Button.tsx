"use client"
import { usePathname, useRouter } from "next/navigation";

import { ProductItemType } from "@/types/productItem";
import { queryByUUID } from "@/db/serverQueryByUUID";
import { useProductStore } from "@/state/admin/uploadNewProductToDb";
import Portal from "@/app/components/generic/Portal";
import Popup from "@/app/components/generic/Popup";

type ButtonProps = {
  uuidMatch?: queryByUUID | ProductItemType[]
}

export default function Button({ uuidMatch }: ButtonProps) {
  const { isSaved, setIsSaved, hasNoImage, setShowImgError, handleManageSave, isProductInDb, setIsProductInDbError, isProductInDbError, resetProductFields } = useProductStore();
  const [pathname, router] = [usePathname(), useRouter()]

  const onClickHandler = async () => {
    if (!uuidMatch && hasNoImage) {
      setShowImgError(true)
      return
    }

    if (await isProductInDb()) {
      setIsProductInDbError(true)
      return
    }

    handleManageSave(uuidMatch)
    setIsSaved(!isSaved)
    router.push(pathname)
  }

  const handleDiscardValues = () => {
    setIsProductInDbError(false)
    resetProductFields()
  }

  return (
    <>
      <button
        className={"bg-t_mustard rounded-[5px] text-[#0d0d0d] focus:ring-yellow hover:text-t_admin_black hover:bg-white col-span-2 mx-auto mt-10 flex w-[260px] items-center justify-center px-24 py-3 text-[13px] font-semibold focus:outline-none focus:ring-[0.15rem] font-semibold tracking-wider"}
        onClick={onClickHandler}
      >
        SAVE
      </button>

      {isProductInDbError && (
        <Portal>
          <Popup
            option1={{ value: "KEEP", function: () => setIsProductInDbError(false) }}
            option2={{ value: "DISCARD", function: handleDiscardValues }}
          >Existing product. Keep or discard values?</Popup>
        </Portal>
      )}
    </>
  )
}
