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
import { supabase } from "@/app/supabase";
import { useUIStore } from "@/state/client/uiState"

type FilterTopProps = {
  gender: Gender
  lang: Locales
  className: string
}

export default function FilterTop({ gender, lang, className }: FilterTopProps) {
  const { showSavedFiltersPopup, setShowSavedFiltersPopup, hideFilters, setHideFilters } = useFilterStore()
  const hideOrShowFiltersText = !hideFilters ? 'Hide Filters' : 'Show Filters'
  const [position, setPosition] = useState('static')
  const positionBasedStyles = position === 'static' ? 'justify-between' : 'justify-around px-20 py-2 '
  const { showSignIn, setShowSignIn } = useUIStore()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
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

  const handleSavedFilters = async () => {
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setShowSignIn(true)
      return
    }
    setShowSavedFiltersPopup(true)
  }

  return (
    <section className={`bg-t_white dark:bg-t_black ${position} left-[1vw] right-[1vw] top-0 z-50 ${className}`}>
      <div className={`flex items-baseline ${positionBasedStyles}`}>
        <FilterSideControls gender={gender} lang={lang} />

        <div className={`ml-auto flex items-center gap-4 ${albert_500.className} text-[14px]`}>

          <div className="flex cursor-pointer justify-center gap-2">
            <span className="" onClick={filterVisibilityHandler}>{hideOrShowFiltersText}</span>
            <IconHideFilters />
          </div>

          <div className="flex cursor-pointer justify-center gap-2"
            onClick={handleSavedFilters}>
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
    </section>
  )
}
