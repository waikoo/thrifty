import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { FilterSide, FilterTop } from "@/app/components/products"
import { ProductList } from "@/app/components/products/serverIndex"
import { fetchProductsByFilters } from "@/db/fetchProductsByFilters"
import { Gender, Locales } from "@/types/link"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams }: PageProps) {
  const products = await fetchProductsByFilters(useSupabaseServer(), searchParams)

  return (
    <main className="bg-t_white dark:bg-t_black text-content mx-auto px-20 lg:max-w-[1500px]">
      <img src="/images/products/crossing.png"
        alt="the feet of four women crossing the street"
        className="my-3 w-full"
      />
      <FilterTop {...{ gender, lang }} />
      <div id="popup-root"></div>
      <div className="flex gap-16 mt-3">
        <FilterSide {...{ lang, gender, searchParams }} />

        {products.status === 400 ? <p>No products found</p> : (
          <ProductList {...{ lang, gender, searchParams }} products={products.data} />
        )}
      </div>
    </main>
  )
}
