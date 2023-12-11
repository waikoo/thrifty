"use client"
import { ProductItemType } from "@/types/productItem"
import { useState } from "react"
import Image from 'next/image'
import { AdminProductID, AdminProductItem } from "."

type AdminProductListProps = {
  draft: ProductItemType[]
}

export default function AdminProductList({ draft }: AdminProductListProps) {
  const [showPopup, setShowPopup] = useState(new Array(draft.length).fill(false))

  const onMouseHandler = (i: number, boolean: boolean) => {
    setShowPopup(prevState => {

      const newState = [...prevState];
      newState[i] = boolean;
      return newState;
    });
  }

  return (
    <div className="mx-auto flex flex-wrap gap-[0.5rem] overflow-y-scroll rounded-lg p-6">
      {draft?.filter(el => el.img_url && el.img_url.length > 0).map((el, i) => (
        <div className="h-[5.8rem] w-[15%]"
          key={i}
          onMouseOver={() => onMouseHandler(i, true)}
          onMouseLeave={() => onMouseHandler(i, false)}
        >
          <Image
            className="relative block h-full w-full object-cover"
            src={el.img_url[0]}
            alt={`new-product-${i}`}
            width={100}
            height={100}
          />
          {showPopup[i] &&
            <section className="bg-bkg text-content border-content shadow-custom absolute z-10 w-auto whitespace-nowrap rounded-md border-[0.1875rem] p-[1.125rem]">
              <div className="bg-bkg text-content z-10 grid grid-cols-2 gap-1 rounded-md text-center">

                <AdminProductID type={el.uuid} />

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
                <AdminProductItem type={el.created_at}>DATE ADDED</AdminProductItem>

                <span className="col-span-2 w-full text-center text-[0.75rem] font-medium">
                  {el.img_url.length} Image{el.img_url.length > 1 ? 's' : ''}
                </span>
              </div>
            </section>
          }
        </div>
      ))}
    </div>

  )
}
