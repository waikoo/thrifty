import { Category } from "@/types/home";
import { IconHideFilters, IconSavedFilters, IconSortBy } from "./icons";

type FilterTopProps = {
  category: Category['category']
}

export default function FilterTop({ category }: FilterTopProps) {

  return (
    <section className="flex items-baseline justify-between py-6">
      <div>
        <span className="text-[0.813rem]">{category.toUpperCase()}</span>
        <span> / </span>
        <span className="text-[0.813rem]">CLOTHING</span>
        <span> / </span>
        <span className="text-[1.125rem] font-bold">JACKETS</span>
      </div>

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
