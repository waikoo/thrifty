import { Category, Locales } from "@/types/home";
import { IconHideFilters, IconSavedFilters, IconSortBy } from "./icons";
import FilterSideControls from "./FilterSideControls";
import { FilterDropdown } from ".";

type FilterTopProps = {
  gender: Category['category']
  lang: Locales
}

export default function FilterTop({ gender, lang }: FilterTopProps) {


  return (
    <section className="flex items-baseline justify-between py-6">
      <FilterSideControls gender={gender} lang={lang} />

      <div className="flex items-center gap-4">

        <div className="flex cursor-pointer justify-center gap-2">
          <span className="text-[0.875rem] font-medium">Hide Filters</span>
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
