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
      <picture>
        <source srcSet="/images/products/banner_mobile.avif" type="image/avif" />
        <source srcSet="/images/products/banner_mobile.webp" type="image/webp" />
        <img src="/images/products/banner_mobile.jpg"
          alt=""
          className="sm:hidden w-screen mt-3"
        />
      </picture>
      <picture>
        <source srcSet="/images/products/banner_tablet.avif" type="image/avif" />
        <source srcSet="/images/products/banner_tablet.webp" type="image/webp" />
        <img src="/images/products/banner_tablet.jpg"
          alt=""
          className="hidden sm:block xl:hidden w-screen mt-3"
        />
      </picture>
      <main className="bg-t_white dark:bg-t_black text-content mx-auto px-[12px] sm:px-[55px] lg:max-w-[900px] xl:max-w-[1440px] 3xl:max-w-[1800px]">
        <picture>
          <source srcSet="/images/products/banner.avif" type="image/avif" />
          <source srcSet="/images/products/banner.webp" type="image/webp" />
          <img src="/images/products/banner.png"
            alt="four women crossing the street, each in a different outfit, only legs are visible"
            className="hidden xl:block xl:my-3 xl:w-full rounded-[20px]"
          />
        </picture>
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
