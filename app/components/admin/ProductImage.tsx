"use client"
import { useRef } from "react"
import { ImageButton, ImagesDisplay } from "."

type ProductImageProps = {
}

export default function ProductImage({ }: ProductImageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  return (
    <div className="flex flex-col items-center gap-6">

      <div className="grid w-full grid-cols-10">

        <span className="text-content self-center justify-self-center text-[0.8125rem] font-semibold">
          URL
        </span>

        <input ref={inputRef}
          type="text"
          className={"bg-bkg border-content col-span-7 w-full border-[0.1rem] p-[0.5rem] text-[0.8125rem] font-medium"}
          placeholder="Add link here" />

        <ImageButton {... { inputRef }} />

      </div>

      <ImagesDisplay />

    </div>
  )
}
