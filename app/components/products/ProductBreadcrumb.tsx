"use client"
import { ProductItemType } from "@/types/productItem"
import { capitalize } from "@/utils/capitalize"
import { useRouter } from "next/navigation"

type ProductBreadcrumbProps = {
  matchedProduct: ProductItemType
}

export default function ProductBreadcrumb({ matchedProduct }: ProductBreadcrumbProps) {
  const { gender, category, type, brand, color, material } = matchedProduct
  const router = useRouter()

  function goBack(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
    e.preventDefault()
    router.back()
  }

  return (
    <section className="bg-faded text-bkg mt-8 grid w-screen grid-cols-6 p-4">
      <div className="col-start-2 col-end-6 row-span-1 row-start-1 row-end-2 text-center text-[0.6875rem] font-medium">
        <span>{capitalize(gender)}</span>
        <span>{' > '}</span>
        <span>{capitalize(category)}</span>
        <span>{' > '}</span>
        <span>{capitalize(type)}</span>
        <span>{' > '}</span>
        <span>{capitalize(brand)}</span>
        <span>{' > '}</span>
        <span className="font-regular text-darkgrey">{capitalize(color)} </span>
        <span className="font-regular text-darkgrey">{capitalize(material)} </span>
        <span className="font-regular text-darkgrey">{capitalize(type)} </span>
      </div>

      <span
        className="align-self-center font-regular col-start-6 col-end-7 row-span-1 cursor-pointer justify-self-start text-[0.6875rem] underline underline-offset-4"
        onClick={goBack}>BACK</span>
    </section>
  )
}
