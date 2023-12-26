"use client"
import { useProductStore } from '@/state/productState'
import Image from 'next/image'
import { useRef } from 'react'
import { ImageEdit } from './'
import { useUIStore } from '@/state'
import { ProductItemType } from '@/types/productItem'

type ImagesDisplayProps = {
  uuidMatch?: ProductItemType[]
}

export default function ImagesDisplay({ uuidMatch }: ImagesDisplayProps) {
  const { img_url } = useProductStore()
  const imgOutput = uuidMatch && uuidMatch?.[0]?.img_url?.length > 0 ? uuidMatch?.[0]?.img_url : img_url
  const { showEditOptions, setShowEditOptions } = useUIStore()
  const imageContainerRef = useRef<HTMLDivElement | null>(null)
  const imageRef = useRef<HTMLImageElement | null>(null)

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setShowEditOptions(true)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setShowEditOptions(false)
  }

  return (
    <div className="flex w-full flex-wrap gap-4" ref={imageContainerRef}>

      {imgOutput.map((src, i) => (
        <div key={`admin-imgs-${i}`} className="relative w-[23.2%]">
          <Image
            src={src}
            alt=""
            width={100}
            height={100}
            className="block w-full"
            ref={imageRef}
            onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseLeave={(e) => handleMouseLeave(e)}
          />
          {showEditOptions && <ImageEdit {... { src }} />}
        </div>
      ))}

    </div>
  )
}
