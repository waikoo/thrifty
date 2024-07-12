/* eslint-disable @next/next/no-img-element */
import { useSupabaseServer } from "@/app/components/hooks/serverIndex"
import FilterControls from "@/app/components/products/FilterControls"
import FilterTop from "@/app/components/products/FilterTop"
import FilterTopMini from "@/app/components/products/FilterTopMini"
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
  const { status, filteredMatchesTotal, paginatedMatches } = await fetchProductsByFilters(useSupabaseServer(), searchParams)

  return (
    <>
      <img src="/images/products/crossing_wider.png"
        alt="four women crossing the street, each in a different outfit, cropped from waist down"
        className="xl:hidden w-screen mt-3"
      />
      <main className="bg-t_white dark:bg-t_black text-content mx-auto px-20 lg:max-w-[1500px]">
        <img src="/images/products/crossing.png"
          alt="four women crossing the street, each in a different outfit, only legs are visible"
          className="hidden xl:block xl:my-3 xl:w-full"
        />
        <FilterTop {...{ gender, lang }} className="hidden xl:block" />
        <div id="popup-root"></div>

        <FilterTopMini {...{ filteredMatchesTotal, lang, gender, searchParams }} />

        <div className="xl:flex xl:gap-16 xl:mt-3">
          <FilterControls {...{ searchParams }} className="hidden xl:flex w-[300px]" />

          {status === 400 ? <p>Something went wrong, please refresh the page</p> : (
            <ProductList {...{ lang, gender, searchParams, filteredMatchesTotal }} products={paginatedMatches} />
          )}
        </div>
      </main>
    </>
  )
}
