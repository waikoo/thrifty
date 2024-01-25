import Image from 'next/image'
import Link from "next/link"
import { twMerge as tm } from 'tailwind-merge'

import { capitalize } from '@/utils/capitalize'
import { ProductItemType } from "@/types/productItem"
import { Category, Locales } from "@/types/home"
import ProductAddToCart from '@/app/components/products/ProductAddToCart'

type ProductItemProps = {
  product: ProductItemType
  index: number,
  lang?: Locales
  gender?: Category['category']
  className?: string
  searchParams?: URLSearchParams
}

export default function ProductItem({ product, index, lang, gender, className, searchParams }: ProductItemProps) {
  const { type, size, price, img_url, discount, brand, uuid } = product

  return (
    <div className={`flex-grow-0`}>
      <div className={tm(`${className}`)}>
        <Link href={`/${lang}/${gender}/products/${uuid}`}>
          <Image
            src={img_url[0]}
            alt={'product-image'}
            width={100}
            height={100}
            className="block h-full w-full object-cover"
            priority={index + 1 < 9}
          />
        </Link>
      </div>

      <ProductAddToCart uuid={uuid} />

      <div className="text-content text-[0.75rem] font-semibold">
        <div className="flex justify-between">
          <span>{capitalize(brand)}</span>
          <span>{size}</span>
        </div>
        <span className="block text-[0.75rem] font-light text-gray-200">{capitalize(type)}</span>
        <span>€{price}</span>
      </div>
    </div>
  )
}
