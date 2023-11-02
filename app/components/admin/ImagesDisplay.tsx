"use client"
import { useProductStore } from '@/state/productState'
import Image from 'next/image'
import { useRef } from 'react'
import { ImageEdit } from './'
import { useUIStore } from '@/state'

type ImagesDisplayProps = {
}

export default function ImagesDisplay({ }: ImagesDisplayProps) {
  const { imgUrl } = useProductStore()
  const { showEditOptions, setShowEditOptions } = useUIStore()
  const editRef = useRef<HTMLDivElement | null>(null)

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // if (!editRef.current?.contains(e.relatedTarget as Node)) {
    //   setShowEditOptions(false)
    // }
  }

  // const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   // if (e.target !== editRef.current || e.target !==) {
  //   console.log(e.target)
  //   setShowEditOptions(false)
  //   // }
  //
  // }

  return (
    <div className="flex w-full flex-wrap gap-4">

      {imgUrl.map((src, i) => (
        <div key={`admin-imgs-${i}`} className="relative w-[23.2%]">
          <Image
            src={src}
            alt=""
            width={100}
            height={100}
            className="block w-full"
            onMouseOver={() => setShowEditOptions(true)}
            // onMouseEnter={(e) => handleMouseEnter(e)}
            onMouseOut={(e) => handleMouseOut(e)}
          />
          {showEditOptions && <ImageEdit {... { src, editRef }} />}
        </div>
      ))}

    </div>
  )
}
