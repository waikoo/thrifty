import { FilterSide, FilterTop } from "@/app/components/products"
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
    <main className="bg-bkg text-content px-20">
      <FilterTop {...{ category }} />
      <FilterSide {...{ category }} />
    </main>
  )
}
