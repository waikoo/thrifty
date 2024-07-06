"use client"
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

import FilteredResults from "@/app/components/products/FilteredResults"
import { IconHideFilters } from "@/app/components/products/icons";
import { useFilterStore } from "@/state/client/filterState";
import { albert_500 } from "@/utils/fonts";
import { Gender, Locales } from "@/types/link";
import FilterControlsMini from "@/app/components/products/FilterControlsMini";
import IconSavedFilters2 from "./icons/IconSavedFilters2";
import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state/client/uiState"

type FilterTopMiniProps = {
  filteredMatchesTotal: number
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterTopMini({ filteredMatchesTotal, gender, lang, searchParams }: FilterTopMiniProps) {
  const { showMiniFilters, setShowMiniFilters, setShowSavedFiltersPopup } = useFilterStore()
  const { showSignIn, setShowSignIn } = useUIStore()

  async function openSavedFilters() {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setShowSignIn(!showSignIn)
      return
    }

    setShowSavedFiltersPopup(true)
  }

  return (
    <div className="py-5 xl:hidden w-full">

      <div className={`grid grid-cols-3 justify-items gap-1 text-[18px] w-full ${albert_500.className}`}>

        <div className="bg-t_mustard p-3 px-10 rounded-l-full cursor-pointer"
          onClick={() => setShowMiniFilters(true)}
        >
          <div className="mx-auto flex justify-center gap-2">
            <span>Filters</span>
            <IconHideFilters />
          </div>
        </div>

        <div className="bg-t_mustard p-3 px-10 cursor-pointer"
          onClick={openSavedFilters}>
          <div className="mx-auto flex justify-center items-center gap-2">
            <span className="whitespace-nowrap">Saved Filters</span>
            <IconSavedFilters2 />
          </div>
        </div>

        <div className="bg-t_mustard p-3 px-10 rounded-r-full cursor-pointer">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span>Sort By</span>
            <HiOutlineArrowsUpDown size={18} />
          </div>
        </div>

      </div>

      <div className="mt-5"
      >
        <FilteredResults>{filteredMatchesTotal}</FilteredResults>
      </div>

      {showMiniFilters && <FilterControlsMini {... { gender, lang, searchParams, filteredMatchesTotal }} />}
    </div>
  )
}

