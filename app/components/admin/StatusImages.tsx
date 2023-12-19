"use client"
import Image from 'next/image'
import { useDraftTable, } from "../hooks";
import { useUIStore } from '@/state';

export default function StatusImages() {
  const data = useDraftTable()
  const { draftLength, statusBar } = useUIStore()
  const style = `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`
  const statusStyle = `${statusBar ? 'ring-1 ring-gray-300' : ''}`

  return (
    <div className="bg-content relative bottom-16 flex h-[46vh] p-6">
      <div className={`flex h-full w-[50%] max-w-[50%] flex-wrap gap-[0.5rem] rounded-lg p-6 z-50 ${style} ${statusStyle}`}>
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
