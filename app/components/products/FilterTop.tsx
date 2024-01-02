import { Category, Locales } from "@/types/home";
import { IconHideFilters, IconSavedFilters, IconSortBy } from "./icons";
import FilterSideControls from "./FilterSideControls";

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
          <span className="text-[0.875rem] font-medium">Saved Filters</span>
          <IconSavedFilters />
        </div>

        <div className="flex cursor-pointer justify-center gap-2">
          <span className="text-[0.875rem] font-medium">Hide Filters</span>
          <IconHideFilters />
        </div>

        <div className="flex cursor-pointer justify-center gap-2">
          <span className="text-[0.875rem] font-medium">Sort By</span>
          <IconSortBy />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[0.875rem] font-medium">Items on page:</span>
          <select className="text-bkg cursor-pointer p-2">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>

      </div>
    </section >
  )
}
