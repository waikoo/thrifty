"use client"
import { useEditedStore, useUIStore } from "@/state"
import { ProductItemType } from "@/types/productItem"
import { useEffect } from "react"
import { useSummaryPopup } from "../hooks"
import { usePathname, useRouter } from "next/navigation"
import Image from 'next/image'
import { FaCheckSquare } from "react-icons/fa"
import { AdminProductSummary } from "."

type AdminEditedListProps = {
  edited: ProductItemType[]
}

export default function AdminEditedList({ edited }: AdminEditedListProps) {
  const { showPopup, onMouseHandler } = useSummaryPopup(edited)
  const { toggleSelected } = useUIStore()
  const { selectedItems, toggleItem, selectAll, deselectAll } = useEditedStore()
  const [router, pathname] = [useRouter(), usePathname()]

  useEffect(() => {
    toggleSelected ? selectAll(edited) : deselectAll()
  }, [toggleSelected])

  return (
    <div className="grid grid-cols-[repeat(6,minmax(30px,1fr))] gap-2 p-6">
      {edited?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className={`aspect-square 
          ${toggleSelected ? "cursor-pointer" : ""}`}
          key={i}
          onMouseOver={() => onMouseHandler(i, true)}
          onMouseLeave={() => onMouseHandler(i, false)}
          onClick={() => {
            if (toggleSelected) {
              toggleItem(el.uuid)
              return
            }
            router.push(`${pathname}/manage/?uuid=${el.uuid}`)
          }
          }
          data-uuid={el.uuid}
        >
          <div className="relative">
            <Image
              className="block h-full w-full cursor-pointer object-cover"
              src={el.img_url[0]}
              alt={`new-product-${i}`}
              width={100}
              height={100}
            />
            {selectedItems.includes(el.uuid) && (
              <div className="absolute right-2 top-2"><FaCheckSquare /></div>
            )}
          </div>

          {showPopup[i] && <AdminProductSummary el={el} />}
        </div>
      ))
      }
    </div >
  )
}
