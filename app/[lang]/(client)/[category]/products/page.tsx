import { FilterSide, FilterTop, ProductList } from "@/app/components/products"
import { Category, Locales } from "@/types/home"

type PageProps = {
  params: {
    lang: Locales,
    category: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}
export default async function Page({ params: { lang, category }, searchParams, }: PageProps) {

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
