import { Category, Locales } from "@/types/home"
import { ProductItemType } from "@/types/productItem"
import { ProductItem, FilterNotFound, ProductPagination } from "@/app/components/products"
import { NewArrivals } from "@/app/components/home/serverIndex"

type ProductListProps = {
  lang: Locales
  gender: Category['category']
  searchParams: { [key: string]: string | string[] | undefined }
  products: ProductItemType[]
}

export default function ProductList({ lang, gender, searchParams, products }: ProductListProps) {
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
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-4">
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
          <ProductPagination productsLength={products.length} />
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
