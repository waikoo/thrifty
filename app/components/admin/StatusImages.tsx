"use client"
import Image from 'next/image'
import { useDraftTable, } from "../hooks";
import { useUIStore } from '@/state';
import { EditDelete } from '.';

export default function StatusImages() {
  const data = useDraftTable()
  const { draftLength, statusBar, showOptions, setShowOptions } = useUIStore()
  const style = `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`
  const statusStyle = `${statusBar ? 'ring-1 ring-gray-300' : ''}`

  return (
    <div className="bg-content relative bottom-16 flex h-[46vh] p-6">
      <div className={`w-1/2 grid grid-cols[repeat(6,minmax(30px,1fr))] rounded-lg py-6 ${style} ${statusStyle}`}>
        {data?.filter(el => el.img_url && el.img_url.length > 0)
          .map((el, i) => (
            <div className="relative aspect-square w-[180px]"
              key={i}
            >
              <Image
                className="block h-full w-full object-contain"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100}
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
              />

              {showOptions && <EditDelete uuid={el.uuid} />}
            </div>
          ))}
      </div>

      <div className="max-w-1/2">right</div>
    </div>
  )
}
