"use client"
import { Category, Locales } from "@/types/home";
import { IconHideFilters, IconSavedFilters } from "@/app/components/products/icons";
import FilterSideControls from "@/app/components/products/FilterSideControls";
import { FilterDropdown } from "@/app/components/products";
import { useUIStore } from "@/state";

type FilterTopProps = {
  gender: Category['category']
  lang: Locales
}

export default function FilterTop({ gender, lang }: FilterTopProps) {
  const { hideFilters, setHideFilters } = useUIStore()
  const hideOrShowFiltersText = !hideFilters ? 'Hide Filters' : 'Show Filters'

  const filterVisibilityHandler = () => {
    setHideFilters(!hideFilters)
  }

  return (
    <section className="flex items-baseline justify-between py-6">
      <FilterSideControls gender={gender} lang={lang} />

      <div className="ml-auto flex items-center gap-4">

        <div className="flex cursor-pointer justify-center gap-2">
          <span className="text-[0.875rem] font-medium" onClick={filterVisibilityHandler}>{hideOrShowFiltersText}</span>
          <IconHideFilters />
        </div>

        <div className="flex cursor-pointer justify-center gap-2">
          <span className="text-[0.875rem] font-medium">Saved Filters</span>
          <IconSavedFilters />
        </div>

        <FilterDropdown />

      </div>
    </section >
  )
}
