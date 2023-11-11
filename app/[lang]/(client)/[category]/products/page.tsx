import { FilterSide, FilterTop } from "@/app/components/products"
import { getProducts } from "@/app/components/products/ProductList"
import { ProductList } from "@/app/components/products/serverIndex"
import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    category: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, category }, searchParams, }: PageProps) {
  getProducts()

  return (
    <main className="bg-bkg text-content mx-auto px-20 lg:max-w-[1500px]">
      <FilterTop {...{ category }} />

      <div className="flex gap-16">
        <FilterSide {...{ category }} />
        <ProductList {...{ lang, category, searchParams }} />
      </div>

    </main>
  )
}
