import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { ProductItem, FilterNotFound, ProductPagination } from "@/app/components/products"
import { NewArrivals } from "@/app/components/home/serverIndex"
import { ReadonlyURLSearchParams } from "next/navigation"

type ProductListProps = {
  lang: Locales
  gender: Category['category']
  searchParams: ReadonlyURLSearchParams
  data: ProductItemType[]
}

export default function ProductList({ lang, gender, searchParams, data }: ProductListProps) {
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
    <div className="w-full">
      {data.length > 0 ? (
        <>
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-4">
            {data.map((product: ProductItemType, i: number) => {
              return (
                <ProductItem
                  key={product.uuid}
                  product={product}
                  index={i}
                  searchParams={searchParams}
                  lang={lang}
                  gender={gender}
                  className={"aspect-square"}
                />
              )
            })}
          </div>
          <ProductPagination productsLength={data.length} />
        </>
      ) : (
        <>
          <FilterNotFound />
          <NewArrivals {...{ lang, gender }} notHome />
        </>
      )}
    </div>
  )
}
