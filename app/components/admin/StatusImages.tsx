"use client"
import Image from 'next/image'
import { useTable } from "../hooks";
import { useUIStore } from '@/state';
import { EditDelete } from '.';

export default function StatusImages() {
  const draft = useTable('draft')
  const edited = useTable('edited')
  const { draftLength, statusBar, showOptions, setShowOptions } = useUIStore()
  const style = `${draftLength === 0 ? '' : 'hover:bg-darkgrey '}`
  const statusStyle = `${statusBar ? 'ring-1 ring-gray-300' : ''}`

  return (
    <div className="bg-content relative bottom-16 flex h-[46vh] w-full gap-6 p-6">
      <div className={`w-1/2 grid grid-cols[repeat(6,minmax(30px,1fr))] rounded-lg py-6 ${style} ${statusStyle}`}>
        {draft?.filter(el => el.img_url && el.img_url.length > 0)
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

              {showOptions && <EditDelete uuid={el.uuid} table="draft" />}
            </div>
          ))}
      </div>

      <div className={`w-1/2 gap-6 grid grid-cols[repeat(6,minmax(30px,1fr))] rounded-lg p-6 ${style} ${statusStyle}`}>
        {edited?.filter(el => el.img_url && el.img_url.length > 0)
          .map((el, i) => (
            <div className="relative aspect-square w-[180px]"
              key={i}
            >
              <Image
                className="block h-full w-full object-cover"
                src={el.img_url[0]}
                alt={`new-product-${i}`}
                width={100}
                height={100}
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
              />

              {showOptions && (
                <EditDelete
                  uuid={el.uuid}
                  table="edited" />
              )
              }
            </div>
          ))}

      </div>
    </div>
  )
}
