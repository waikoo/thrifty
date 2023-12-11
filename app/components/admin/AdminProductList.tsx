"use client"
import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'
import { getDayMonthYear } from "@/utils/getDayMonthYear"
import { AdminProductItem } from "."

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {

  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

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
              <div className="bg-bkg text-content z-10 grid grid-cols-2 gap-2 text-center">
                <span className="col-span-2 whitespace-nowrap">ID: <span className="bg-content text-bkg justify-self-start whitespace-nowrap p-1">{el.uuid}</span></span>

                <AdminProductItem type={el.gender}>GENDER</AdminProductItem>
                <AdminProductItem type={el.category}>CATEGORY</AdminProductItem>
                <AdminProductItem type={el.type}>PRODUCT TYPE</AdminProductItem>
                <AdminProductItem type={el.price}>PRICE</AdminProductItem>
                <AdminProductItem type={el.discount}>DISCOUNT</AdminProductItem>
                <AdminProductItem type={el.size}>SIZE</AdminProductItem>
                <AdminProductItem type={el.color}>COLOR</AdminProductItem>
                <AdminProductItem type={el.brand}>BRAND</AdminProductItem>
                <AdminProductItem type={el.condition}>CONDITION</AdminProductItem>
                <AdminProductItem type={el.material}>MATERIAL</AdminProductItem>

                <span className="justify-self-end">DATE ADDED: </span><span className="justify-self-start">{getDayMonthYear(el.created_at)}</span>

                <span className="col-span-2 w-full text-center">{el.img_url.length} Image{el.img_url.length > 1 ? 's' : ''}</span>
              </div>
            </section>
          }
        </div>
      ))}
    </div>

  )
}
