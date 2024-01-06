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
  const newParams = new URLSearchParams(searchParams)
  const sortBy = newParams?.get('sort-by')

  if (sortBy === 'cheapfirst') {
    data.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }
  if (sortBy === 'expensivefirst') {
    data.sort((a, b) => (a.price < b.price) ? 1 : -1)
  }
  if (sortBy === 'newfirst') {
    data.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
  }

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
