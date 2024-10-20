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
  const showError = showImgError || showValidityError ? "border-red" : "border-content"

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="grid w-full grid-cols-10">

        <span className="self-center justify-self-center text-[0.8125rem] font-semibold">
          URL
        </span>

        <div className="relative col-span-7">
          <input ref={inputRef}
            type="text"
            className={`${showError} focus:ring-yellow bg-bkg text-content w-full border-[0.1rem] p-[0.5rem] text-[0.8125rem] font-medium focus:outline-none focus:ring-[0.15rem]`}
            placeholder="Add link here"
            pattern="https?://.*"
            title="Please enter a valid URL"
          />
          {showImgError && (
            <span className="text-red absolute left-0 top-10">This field is required.</span>
          )}
          {showValidityError && (
            <span className="text-red absolute left-0 top-10">Invalid URL. Please make sure the link is correct.</span>
          )}
        </div>

        <ImageButton {... { inputRef, setShowValidityError }} />

      </div>

      <ImagesDisplay uuidMatch={uuidMatch} />

    </div>
  )
}
