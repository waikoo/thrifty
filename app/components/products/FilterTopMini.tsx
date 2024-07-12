"use client"
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { IoFilterSharp } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";

import FilteredResults from "@/app/components/products/FilteredResults"
import { useFilterStore } from "@/state/client/filterState";
import { albert_500 } from "@/utils/fonts";
import { Gender, Locales } from "@/types/link";
import FilterControlsMini from "@/app/components/products/FilterControlsMini";
import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state/client/uiState"
import { usePathname } from "next/navigation";
import usePosition from "../hooks/usePosition";
import useViewport from "../hooks/useViewport";
import { viewport } from "../data/universalStyles";

type FilterTopMiniProps = {
  filteredMatchesTotal: number
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterTopMini({ filteredMatchesTotal, gender, lang, searchParams }: FilterTopMiniProps) {
  const { showMiniFilters, setShowMiniFilters, setShowSavedFiltersPopup } = useFilterStore()
  const { showSignIn, setShowSignIn } = useUIStore()
  const position = usePosition(usePathname())
  const innerDivStyles = position === 'static' ? 'w-full py-5' : 'w-auto py-[11px] px-20'
  const currentViewport = useViewport()
  const iconSize = currentViewport < viewport.sm ? 22 : 18

  async function openSavedFilters() {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setShowSignIn(!showSignIn)
      return
    }

    setShowSavedFiltersPopup(true)
  }

  return (
    <div className={`py-2 sm:py-5 xl:hidden ${position} top-0 left-0 right-0 z-[90] bg-t_white`}>

      <div className={`${innerDivStyles}`}>
        <div className={`grid grid-cols-3 justify-items-center sm:justify-items-stretch gap-1 text-[18px] mx-auto sm:w-full ${albert_500.className}`}>

          <div className="bg-t_mustard p-3 sm:p-3 sm:px-10 rounded-full sm:rounded-l-full sm:rounded-r-none cursor-pointer justify-self-end sm:justify-self-auto"
            onClick={() => setShowMiniFilters(true)}
          >
            <div className="mx-auto flex justify-center gap-2 items-center">
              <span className="hidden sm:block">Filters</span>
              <IoFilterSharp size={iconSize} />
            </div>
          </div>

          <div className="bg-t_mustard p-3 sm:p-3 sm:px-10 rounded-full sm:rounded-none cursor-pointer"
            onClick={openSavedFilters}>
            <div className="mx-auto flex justify-center items-center gap-2">
              <span className="whitespace-nowrap hidden sm:block">Saved Filters</span>
              <LiaFilterSolid size={iconSize} className="min-w-4" />
            </div>
          </div>

          <div className="bg-t_mustard p-3 sm:p-3 sm:px-10 rounded-full sm:rounded-r-full sm:rounded-l-none cursor-pointer justify-self-start sm:justify-self-auto">
            <div className="mx-auto flex items-center justify-center gap-2">
              <span className="whitespace-nowrap hidden sm:block">Sort By</span>
              <HiOutlineArrowsUpDown size={iconSize} className="min-w-4" />
            </div>
          </div>

        </div>

        <div className={`mt-10 hidden ${position === 'fixed' ? 'hidden' : 'sm:block'}`}
        >
          <FilteredResults>{filteredMatchesTotal}</FilteredResults>
        </div>

        {showMiniFilters && <FilterControlsMini {... { gender, lang, searchParams, filteredMatchesTotal }} />}
      </div>
    </div>
  )
}

