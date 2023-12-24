"use client"
import { useUIStore } from "@/state";
import { useProductStore } from "@/state/productState"
import { ProductItemType } from "@/types/productItem";
import { usePathname, useRouter } from "next/navigation";

type ButtonProps = {
  uuidMatch: ProductItemType[]
}

export default function Button({ uuidMatch }: ButtonProps) {
  const { isSaved, setIsSaved } = useUIStore();
  const { saveDraft } = useProductStore()
  const pathname = usePathname()
  const router = useRouter()

  const onClickHandler = async () => {
    saveDraft(uuidMatch)
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
