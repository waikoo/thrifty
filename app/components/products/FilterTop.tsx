"use client"
import { useEffect, useState } from "react";

import { Category, Locales } from "@/types/home";
import { IconHideFilters, IconSavedFilters } from "@/app/components/products/icons";
import FilterSideControls from "@/app/components/products/FilterSideControls";
import { FilterDropdown } from "@/app/components/products";
import Portal from "@/app/components/generic/Portal";
import SavedFilters from "@/app/components/products/SavedFilters";
import { useFilterStore } from "@/state/client/filterState";

type FilterTopProps = {
  gender: Category['category']
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
    <section className={`bg-bkg ${position} left-[1vw] right-[1vw] top-0 z-auto`}>
      <div className={`flex items-baseline ${position === 'static' ? 'justify-between' : 'justify-around'} `}>
        <FilterSideControls gender={gender} lang={lang} />

        <div className="ml-auto flex items-center gap-4">

          <div className="flex cursor-pointer justify-center gap-2">
            <span className="text-[0.875rem] font-medium" onClick={filterVisibilityHandler}>{hideOrShowFiltersText}</span>
            <IconHideFilters />
          </div>

          <div className="flex cursor-pointer justify-center gap-2" onClick={() => setShowSavedFiltersPopup(true)}>
            <span className="text-[0.875rem] font-medium">Saved Filters</span>
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
