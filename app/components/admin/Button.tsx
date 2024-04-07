"use client"
import { usePathname, useRouter } from "next/navigation";

import { useUIStore } from "@/state";
import { ProductItemType } from "@/types/productItem";
import { queryByUUID } from "@/utils/serverQueryByUUID";
import { useProductStore } from "@/state/admin/uploadNewProductToDb";

type ButtonProps = {
  uuidMatch?: queryByUUID | ProductItemType[]
}

export default function Button({ uuidMatch }: ButtonProps) {
  const { isSaved, setIsSaved, hasNoImage, setShowImgError } = useUIStore();
  const { handleManageSave } = useProductStore()
  const [pathname, router] = [usePathname(), useRouter()]

  const onClickHandler = () => {
    if (hasNoImage) {
      setShowImgError(true)
      return
    }
    handleManageSave(uuidMatch)
    setIsSaved(!isSaved)
    router.push(pathname)
  }

  return (
    <button
      className={"focus:ring-yellow border-content text-content hover:text-bkg hover:bg-content col-span-2 mx-auto mt-10 flex w-16 items-center justify-center border-[0.1rem] px-24 py-3 text-[0.8125rem] font-semibold focus:outline-none focus:ring-[0.15rem]"}
      onClick={onClickHandler}
    >
      SAVE
    </button>
  )
}
