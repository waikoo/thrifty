import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { ProductItem, FilterNotFound } from "."
import { fetchProductsByFilters } from '@/utils/fetchProductsByFilters'
import { useSupabaseServer } from "../hooks/serverIndex"
import { NewArrivals } from "../home/serverIndex"

type ProductListProps = {
  lang: Locales
  category: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ProductList({ lang, category, searchParams }: ProductListProps) {
  const data = await fetchProductsByFilters(useSupabaseServer(), searchParams)

  return (
    <div className="mx-auto flex w-[80%] flex-wrap gap-8">
      {data.data.length > 0 ? data.data.map((product: ProductItemType, i: number) => {
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
            <NewArrivals {...{ lang, category }} notHome />
          </>
        )}
    </div>
  )
}
