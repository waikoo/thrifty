"use client"
import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'
import { AdminProductSummary } from "."
import { useSummaryPopup } from "../hooks"

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {
  const { showPopup, onMouseHandler } = useSummaryPopup(draft)

  return (
    <div className="grid grid-cols-[repeat(6,minmax(30px,1fr))] gap-2 p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className="aspect-square"
          key={i}
          onMouseOver={() => onMouseHandler(i, true)}
          onMouseLeave={() => onMouseHandler(i, false)}
        >
          <Image
            className="relative block h-full w-full object-cover"
            src={el.img_url[0]}
            alt={`new-product-${i}`}
            width={100}
            height={100}
          />
          {showPopup[i] && <AdminProductSummary el={el} />}
        </div>
      ))}
    </div>

  )
}
