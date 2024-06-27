"use client"
import { useEffect, useState } from "react";

import { Gender, Locales } from "@/types/link";
import { IconHideFilters, IconSavedFilters } from "@/app/components/products/icons";
import FilterSideControls from "@/app/components/products/FilterSideControls";
import { FilterDropdown } from "@/app/components/products";
import Portal from "@/app/components/generic/Portal";
import SavedFilters from "@/app/components/products/SavedFilters";
import { useFilterStore } from "@/state/client/filterState";
import { albert_500 } from "@/utils/fonts";

type FilterTopProps = {
  gender: Gender
  lang: Locales
}

export default function FilterTop({ gender, lang }: FilterTopProps) {
  const { showSavedFiltersPopup, setShowSavedFiltersPopup, hideFilters, setHideFilters } = useFilterStore()
  const hideOrShowFiltersText = !hideFilters ? 'Hide Filters' : 'Show Filters'
  const [position, setPosition] = useState('static')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setPosition('fixed')
      } else {
        setPosition('static')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const filterVisibilityHandler = () => {
    setHideFilters(!hideFilters)
  }

  return (
    <section className={`bg-t_white dark:bg-t_black ${position} left-[1vw] right-[1vw] top-0 z-auto`}>
      <div className={`flex items-baseline ${position === 'static' ? 'justify-between' : 'justify-around'} `}>
        <FilterSideControls gender={gender} lang={lang} />

        <div className={`ml-auto flex items-center gap-4 ${albert_500.className} text-[14px]`}>

          <div className="flex cursor-pointer justify-center gap-2">
            <span className="" onClick={filterVisibilityHandler}>{hideOrShowFiltersText}</span>
            <IconHideFilters />
          </div>

          <div className="flex cursor-pointer justify-center gap-2" onClick={() => setShowSavedFiltersPopup(true)}>
            <span className="">Saved Filters</span>
            <IconSavedFilters />
          </div>

          <FilterDropdown />

        </div>
        {showSavedFiltersPopup && (
          <Portal>
            <SavedFilters />
          </Portal>
        )}
      </div>
    </section >
  )
}
