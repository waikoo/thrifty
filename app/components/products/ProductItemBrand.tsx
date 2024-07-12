"use client"
import { capitalize } from '@/utils/capitalize'

type ProductItemBrandProps = {
  children: React.ReactNode
}

export default function ProductItemBrand({ children }: ProductItemBrandProps) {
  const capitalizedBrand = capitalize(children as string)

  return (
    <span className="text-nowrap">
      {capitalizedBrand}
    </span>
  )
}

