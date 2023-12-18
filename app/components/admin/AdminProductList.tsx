"use client"
import { ProductItemType } from "@/types/productItem"
import Image from 'next/image'
import { AdminProductSummary } from "."
import { useSummaryPopup } from "../hooks"
import { useDraftStore, useUIStore } from "@/state"
import { FaCheckSquare } from "react-icons/fa";
import { useEffect } from "react"

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {
  const { showPopup, onMouseHandler } = useSummaryPopup(draft)
  const { toggleSelected } = useUIStore()
  const { selectedItems, toggleItem, selectAll, deselectAll } = useDraftStore()

  useEffect(() => {
    toggleSelected ? selectAll(draft) : deselectAll()
  }, [toggleSelected])

  return (
    <div className="grid grid-cols-[repeat(6,minmax(30px,1fr))] gap-2 p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className={`relative aspect-square 
          ${toggleSelected ? "cursor-pointer" : ""}`}
          key={i}
          onMouseOver={() => onMouseHandler(i, true)}
          onMouseLeave={() => onMouseHandler(i, false)}
          onClick={() => toggleItem(el.uuid)}
          data-uuid={el.uuid}
        >
          <Image
            className="relative block h-full w-full object-cover"
            src={el.img_url[0]}
            alt={`new-product-${i}`}
            width={100}
            height={100}
          />
          {selectedItems.includes(el.uuid) && (<div className="absolute right-2 top-2"><FaCheckSquare /></div>)}
          {showPopup[i] && <AdminProductSummary el={el} />}
        </div>
      ))}
    </div>
  )
}
