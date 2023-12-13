"use client"
import Image from 'next/image'
import { useDraftTable, } from "../hooks";

export default function StatusImages() {
  const data = useDraftTable()

  return (
    <div className="flex h-[26.8rem] p-6">
      <div className="hover:bg-darkgrey border-bkg border[0.2rem] flex h-full w-[50%] max-w-[50%] flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6 ring-1 ring-gray-300">
        {data?.filter(el => el.img_url && el.img_url.length > 0)
          .map((el, i) => (
            <div className="aspect-square"
              key={i}
            >
              <Image
                className="block h-full w-full object-cover"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100} />
            </div>
          ))}
      </div>

      <div className="max-w-[50%]">right</div>
    </div>
  )
}
