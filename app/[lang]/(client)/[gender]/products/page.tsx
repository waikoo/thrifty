import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import { FilterSide, FilterTop } from "@/app/components/products"
import { ProductList } from "@/app/components/products/serverIndex"
import { Category, Locales } from "@/types/home"
import { fetchProductsByFilters } from "@/utils/fetchProductsByFilters"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, gender }, searchParams }: PageProps) {
  const data = await fetchProductsByFilters(useSupabaseServer(), searchParams)

  return (
    <main className="bg-bkg text-content mx-auto px-20 lg:max-w-[1500px]">
      <FilterTop {...{ gender, lang }} />

      <div className="flex gap-16">
        <FilterSide {...{ lang, gender, searchParams }} />
        <ProductList {...{ lang, gender, searchParams }} data={data.data} />
      </div>

    </main>
  )
}
