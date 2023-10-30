"use client"
import { useRef, useState } from "react"
import { ImageButton, ImagesDisplay } from "."
import { useProductStore } from "@/state/productState"

type ProductImageProps = {
}

export default function ProductImage({ }: ProductImageProps) {
  const { imgUrl, setImgUrl } = useProductStore()

  // const [images, setImages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="flex w-full flex-col items-center gap-6">

      <div className="flex w-full items-center justify-center gap-6">
        <span className="text-bold">URL</span>

        <div className="flex w-full">
          <input ref={inputRef} type="text" className={`adminBorder w-full p-[0.5rem] bg-bkg`} placeholder="Add link here" />

          <ImageButton {... { inputRef }} />
          {/* <ImageButton {... { inputRef, images, setImages }} /> */}
        </div>

      </div>

      <ImagesDisplay />
      {/* <ImagesDisplay {... { images }} /> */}

    </div>
  )
}
