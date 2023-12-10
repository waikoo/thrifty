"use client"
import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'
import { capitalize } from "@/utils/capitalize"
import { getDayMonthYear } from "@/utils/getDayMonthYear"

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {

  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  // console.table(draft)
  console.log('ProductList')

  const onMouseOver = (i: number) => {
    setShowPopup(prevState => {
      const newState = [...prevState];
      newState[i] = true;
      return newState;
    });
  }

  const onMouseLeave = (i: number) => {
    setShowPopup(prevState => {
      const newState = [...prevState];
      newState[i] = false;
      return newState;
    });
  }
  return (
    <div className="flex h-full w-full flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className="w-[19.1%] flex-grow-0 object-cover"
          key={i}
          onMouseOver={() => onMouseOver(i)}
          onMouseLeave={() => onMouseLeave(i)}
        >
          <Image
            className="relative block min-w-full"
            src={el.img_url[0]}
            alt={`new-product-${i}`}
            width={100}
            height={100}
          />
          {showPopup[i] &&
            <section className="bg-bkg text-content absolute z-10 w-auto p-4">
              <span className="whitespace-nowrap">ID: <span className="bg-content text-bkg justify-self-start whitespace-nowrap p-1">{el.uuid}</span></span>
              <div className="bg-bkg text-content z-10 grid grid-cols-2 gap-2 p-4 text-center">
                <span className="justify-self-end">GENDER: </span> <span className="justify-self-start">{capitalize(el.gender)}</span>
                <span className="justify-self-end">CATEGORY: </span> <span className="justify-self-start">{capitalize(el.category)}</span>
                <span className="justify-self-end whitespace-nowrap">PRODUCT TYPE: </span><span className="justify-self-start">{capitalize(el.type)}</span>
                <span className="justify-self-end">PRICE: </span><span className="justify-self-start">€{el.price}</span>
                <span className="justify-self-end">DISCOUNT: </span><span className="justify-self-start">{el.discount === 0 ? '-' : el.discount}</span>
                <span className="justify-self-end">SIZE: </span><span className="justify-self-start">{capitalize(el.size)}</span>
                <span className="justify-self-end">COLOR: </span><span className="justify-self-start">{capitalize(el.color)}</span>
                <span className="justify-self-end">BRAND: </span><span className="justify-self-start">{capitalize(el.brand)}</span>
                <span className="justify-self-end">CONDITION: </span><span className="justify-self-start">{capitalize(el.condition)}</span>
                <span className="justify-self-end">MATERIAL: </span><span className="justify-self-start">{capitalize(el.material)}</span>
                <span className="justify-self-end">DATE ADDED: </span><span className="justify-self-start">{getDayMonthYear(el.created_at)}</span>
                <span className="justify-self-end">{el.img_url.length} Image{el.img_url.length > 1 ? 's' : ''}</span>
              </div>
            </section>
          }
        </div>
      ))}
    </div>

  )
}
