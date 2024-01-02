import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { ProductItem, FilterNotFound } from "."
import { NewArrivals } from "../home/serverIndex"

type ProductListProps = {
  lang: Locales
  gender: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
  data: ProductItemType[]
}

export default async function ProductList({ lang, gender, searchParams, data }: ProductListProps) {

  return (
    <div className="mx-auto flex w-[80%] flex-wrap gap-8">
      {data.length > 0 ? data.map((product: ProductItemType, i: number) => {
        return (
          <ProductItem
            key={product.uuid}
            product={product}
            index={i}
          />
        )
      })
        : (
          <>
            <FilterNotFound />
            <NewArrivals {...{ lang, gender }} notHome />
          </>
        )}
    </div>
  )
}
