"use client"
import { useRef, useState } from "react"
import { ImageButton, ImagesDisplay } from "."
import { ProductItemType } from "@/types/productItem"
import { useProductStore } from "@/state/admin/uploadNewProductToDb"

type ProductImageProps = {
  uuidMatch?: ProductItemType[]
}

export default function ProductImage({ uuidMatch }: ProductImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { showImgError } = useProductStore()
  const [showValidityError, setShowValidityError] = useState(false)
  const showError = uuidMatch?.[0]?.img_url.length === 0 && (showImgError || showValidityError) ? "border-red-400" : "border-content"

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="grid w-full grid-cols-10">

        <span className="self-center justify-self-start text-[0.8125rem] font-semibold">
          URL
        </span>

        <div className="relative col-span-7">
          <input ref={inputRef}
            type="text"
            className={`${showError} rounded-tl-[7px] rounded-bl-[7px] focus:ring-yellow bg-[#151515] text-white w-full border-[#1b1b1b] border-[0.1rem] p-[0.3rem] text-[0.8125rem] font-medium focus:outline-none focus:ring-[0.15rem]`}
            placeholder="Add link here"
            pattern="https?://.*"
            title="Please enter a valid URL"
          />
          {uuidMatch?.[0]?.img_url.length === 0 && showImgError && (
            <span className="text-red-400 absolute left-0 top-10">This field is required.</span>
          )}
          {showValidityError && (
            <span className="text-red-400 absolute left-0 top-10">Invalid URL. Please make sure the link is correct.</span>
          )}
        </div>

        <ImageButton {... { inputRef, setShowValidityError }} />

      </div>

      <ImagesDisplay uuidMatch={uuidMatch} />

    </div>
  )
}
