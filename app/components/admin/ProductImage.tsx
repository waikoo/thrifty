"use client"
import { useRef } from "react"
import { ImageButton, ImagesDisplay } from "."
import { ProductItemType } from "@/types/productItem"

type ProductImageProps = {
  uuidMatch: ProductItemType[]
}

export default function ProductImage({ uuidMatch }: ProductImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="grid w-full grid-cols-10">

        <span className="text-content self-center justify-self-center text-[0.8125rem] font-semibold">
          URL
        </span>

        <input ref={inputRef}
          type="text"
          className={"focus:ring-yellow bg-bkg text-content border-content col-span-7 w-full border-[0.1rem] p-[0.5rem] text-[0.8125rem] font-medium focus:outline-none focus:ring-[0.15rem]"}
          placeholder="Add link here" />

        <ImageButton {... { inputRef }} />

      </div>

      <ImagesDisplay uuidMatch={uuidMatch} />

    </div>
  )
}
