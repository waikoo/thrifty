"use client"
import { useRef, useState } from "react"
import Image from 'next/image'

type ProductImageProps = {
}

export default function ProductImage({ }: ProductImageProps) {
  const [images, setImages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleNewImage = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.value && setImages([...images, inputRef.current.value]);
      inputRef.current.value = '';
    }
  };
  return (
    <div className="flex w-full flex-col items-center gap-6">

      <div className="flex w-full items-center justify-center gap-6">
        <span className="text-bold">URL</span>

        <div className="flex w-full">
          <input ref={inputRef} type="text" className={`adminBorder w-full p-[0.5rem] bg-bkg`} placeholder="Add link here" />
          <button className={`adminBorder p-[0.5rem]`} onClick={handleNewImage}>Upload</button>
        </div>

      </div>

      <div className="flex w-full flex-wrap gap-4">
        {images.map((src, i) => (
          <div className="w-[23.2%]">
            <Image key={`admin-imgs-${i}`} src={src} alt="" width={100} height={100} className="block w-full" />
          </div>
        ))}
      </div>

    </div>
  )
}
