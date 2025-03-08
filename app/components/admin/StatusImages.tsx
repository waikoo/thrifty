"use client"
import Image from 'next/image'
import { useRealtime, useStatusImagesStyles } from "../hooks";
import { useUIStore } from '@/state/admin/uiState';
import { EditDelete } from '.';

export default function StatusImages() {
  const draft = useRealtime('draft')
  const edited = useRealtime('edited')
  const { draftStyle, editedStyle, statusStyle } = useStatusImagesStyles()
  const { showOptions, setShowOptions } = useUIStore()

  return (
    <div className="bg-white relative bottom-16 flex h-[46vh] w-full gap-6 p-6 px-[110px]">
      <div className={`bg-[#f9f9f9] w-1/2 gap-[1.5rem] grid grid-cols-6 rounded-lg p-6 ${draftStyle} ${statusStyle}`}>
        {draft?.filter(el => el.img_url && el.img_url.length > 0)
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

              {showOptions && <EditDelete uuid={el.uuid} table="draft" />}
            </div>
          ))}
      </div>

      <div className={`bg-[#f9f9f9] w-1/2 gap-[1.5rem] grid grid-cols-6 rounded-lg p-6 ${editedStyle} ${statusStyle}`}>
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
