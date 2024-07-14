"use client"
import { useEffect, useState } from "react";

import FilterSideControls from "@/app/components/products/FilterSideControls";
import Portal from "@/app/components/generic/Portal";
import { Gender, Locales } from "@/types/link";
import { useFilterStore } from "@/state/client/filterState";
import FilterControls from "@/app/components/products/FilterControls";
import { albert_500, albert_800 } from "@/utils/fonts";
import SaveFilterButton from "@/app/components/products/SaveFilterButton";
import MiniCross from "@/app/components/products/MiniCross";
import Spinner from "@/app/components/generic/Spinner";

type FilterControlsMiniProps = {
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
  filteredMatchesTotal: number
}

export default function FilterControlsMini({ lang, gender, searchParams, filteredMatchesTotal }: FilterControlsMiniProps) {
  const { showMiniFilters, setShowMiniFilters } = useFilterStore()
  const [loadingProducts, setLoadingProducts] = useState(false)

  function closeFilters() {
    setShowMiniFilters(false)
  }

  useEffect(() => {
    setLoadingProducts(false)
  }, [searchParams])

  return (
    <Portal>
      <section className="fixed left-0 right-0 z-[100] overflow-y-scroll h-[calc(100dvh)] bg-t_white ">

        <div className="fixed top-0 left-0 right-0 p-5 sm:p-10 bg-t_mustard text-t_black py-1 sm:py-3 flex justify-between items-center">
          <span className={`${albert_800.className} text-[13px] sm:text-[19px]`}>FILTERS</span>

          <div className="flex gap-2">
            <FilterSideControls {...{ gender, lang }}
              className="hidden sm:flex"
            />

            <MiniCross onClose={closeFilters} />
          </div>
        </div>


        <div className="ml-auto bg-t_white">
          <FilterSideControls {...{ gender, lang }}
            className="flex sm:hidden justify-end mr-5 pt-14"
          />
        </div>

        <div className="p-5 sm:pt-10 bg-t_white"
          onClick={() => setLoadingProducts(true)}
        >
          <FilterControls {...{ searchParams }}
            className="flex w-full overflow-y-scroll"
            hideSaveFilter={true}
          />
        </div>

        <div className="h-auto bg-t_white"></div>

        <div className={`bg-t_mustard p-[0.6rem] sm:p-5 px-5 sm:px-10 fixed w-full z-[90] bottom-0 text-[13px] ${albert_500.className}`}>
          <div className="max-w-[800px] mx-auto flex justify-between gap-6">
            <SaveFilterButton className="w-1/2 border-t_black border-[0.1rem]"
              font={`${albert_500.className} text-[13px]`}
            />

            <button className="bg-t_black text-t_white sm:py-4 rounded-full w-1/2"
              onClick={closeFilters}
            >
              {loadingProducts ? <Spinner size={20} /> : `VIEW ${filteredMatchesTotal} RESULTS`}
            </button>
          </div>
        </div>

      </section>
    </Portal >
  )
}

