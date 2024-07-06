"use client"
import { RxCross2 } from "react-icons/rx";

import FilterSideControls from "@/app/components/products/FilterSideControls";
import Portal from "@/app/components/generic/Portal";
import { Gender, Locales } from "@/types/link";
import { useFilterStore } from "@/state/client/filterState";
import FilterControls from "@/app/components/products/FilterControls";
import { albert_800 } from "@/utils/fonts";
import { useEffect } from "react";
import SaveFilterButton from "./SaveFilterButton";
import MiniCross from "./MiniCross";

type FilterControlsMiniProps = {
  lang: Locales
  gender: Gender
  searchParams: { [key: string]: string | string[] | undefined }
  filteredMatchesTotal: number
}

export default function FilterControlsMini({ lang, gender, searchParams, filteredMatchesTotal }: FilterControlsMiniProps) {
  const { showMiniFilters, setShowMiniFilters } = useFilterStore()

  // useEffect(() => {
  //   const handleTouchMove = (e: TouchEvent) => {
  //     if (showMiniFilters) {
  //       e.preventDefault();
  //     }
  //   };
  //
  //   if (showMiniFilters) {
  //     document.addEventListener('touchmove', handleTouchMove, { passive: false });
  //   }
  //
  //   return () => {
  //     document.removeEventListener('touchmove', handleTouchMove);
  //   };
  // }, [showMiniFilters]);

  function closeFilters() {
    setShowMiniFilters(false)
  }

  return (
    <Portal>
      <div className="inset-0 min-h-dvh relative"
      >
        <div className="p-10 bg-t_mustard text-t_black py-3 flex justify-between items-center">
          <span className={`${albert_800.className} text-[19px]`}>FILTERS</span>

          <div className="flex gap-2">
            <FilterSideControls {...{ gender, lang }} />

            <MiniCross onClose={closeFilters} />
          </div>
        </div>

      </div>

      <div className="p-10 overflow-y-scroll">
        <FilterControls {...{ searchParams }}
          className="flex w-full"
          hideSaveFilter={true}
        />
      </div>

      <div className="bg-t_mustard p-5 px-10 absolute w-full bottom-0">
        <div className="max-w-[800px] mx-auto flex justify-between gap-6">
          <SaveFilterButton className="w-1/2 border-t_black border-[0.1rem]" />
          <button className="bg-t_black text-t_white rounded-full w-1/2"
            onClick={closeFilters}
          >
            VIEW {filteredMatchesTotal} RESULTS
          </button>
        </div>
      </div>
    </Portal >
  )
}

