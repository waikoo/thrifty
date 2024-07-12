import { Gender, Locales } from "@/types/link"
import { ProductItemType } from "@/types/productItem"
import { ProductItem, FilterNotFound, ProductPagination } from "@/app/components/products"
import FilteredResults from "@/app/components/products/FilteredResults"

type ProductListProps = {
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
  products: ProductItemType[]
  filteredMatchesTotal: number
}

export default function ProductList({ lang, gender, searchParams, products, filteredMatchesTotal }: ProductListProps) {
  const sortByValue = searchParams['sort-by']

  if (sortByValue === 'cheapfirst') {
    products.sort((a, b) => (a.price > b.price) ? 1 : -1)
  }
  if (sortByValue === 'expensivefirst') {
    products.sort((a, b) => (a.price < b.price) ? 1 : -1)
  }
  if (sortByValue === 'newfirst') {
    products.sort((a, b) => (a.created_at < b.created_at) ? 1 : -1)
  }

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <>
          <div className="relative grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            <FilteredResults className="hidden xl:block absolute -top-[2.6rem]">
              {filteredMatchesTotal}
            </FilteredResults>

            {products.map((product: ProductItemType, i: number) => {
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

          <ProductPagination productsLength={filteredMatchesTotal} />
        </>
      ) : (
        <>
          <FilterNotFound />
        </>
      )}
    </div>
  )
}
