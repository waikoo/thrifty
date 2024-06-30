/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

import { twMerge as tm } from 'tailwind-merge'

import { capitalize } from '@/utils/capitalize'
import { ProductItemType } from "@/types/productItem"
import { Gender, Locales } from "@/types/link"
import ProductAddToCart from '@/app/components/products/ProductAddToCart'
import ProductToggleFavorite from '@/app/components/products/ProductToggleFavorite'
import { EURO } from '@/app/components/data/orderSummary'
import { albert_500, albert_600 } from "@/utils/fonts"

type ProductItemProps = {
  product: ProductItemType
  index: number
  lang?: Locales
  gender?: Gender
  className?: string
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default function ProductItem({ product, index, lang, gender, className, searchParams }: ProductItemProps) {
  const { size, price, img_url, discount, brand, uuid } = product

  return (
    <div className={`flex-grow-0 relative`}>
      <ProductToggleFavorite uuid={uuid} />

      <div className={tm(`${className}`)}>
        <Link href={`/${lang}/${gender}/products/${uuid}`}>
          <img
            src={img_url[0]}
            alt={'product-image'}
            width={100}
            height={100}
            className="block h-full w-full object-cover productItemPosition rounded-[10px]"
          />
        </Link>
      </div>

      <div className={`my-2 text-[14px] text-[#1b1b1b] ${albert_600.className}`}>
        <div className="flex justify-between">
          <span>{capitalize(brand)}</span>
          <span className={`${discount > 0 ? 'line-through' : ''}`}>{EURO}{price}</span> {/* original price */}
        </div>

        <div className="flex justify-between">
          <span className={`text-[12px] ${albert_500.className}`}>{size}</span>
          {discount > 0 && (
            <div className="flex">
              <span className="bg-red px-[0.10rem] text-white">-{discount}%</span>
              <span className="text-red ml-1">{EURO}{price * (100 - discount) / 100}</span> {/* discount price */}
            </div>
          )}
        </div>
      </div>

      <ProductAddToCart uuid={uuid}>ADD TO CART</ProductAddToCart>
    </div>
  )
}
