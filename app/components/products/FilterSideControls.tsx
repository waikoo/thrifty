"use client"
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useFilterStore, useFilterTitleStore } from "@/state/client/filterState";
import { Gender, Locales } from "@/types/link";
import { IconReset } from "@/app/components/products/icons";
import { albert_500 } from "@/utils/fonts";

type FilterSideControlsProps = {
  gender: Gender
  lang: Locales
}

export default function FilterSideControls({ gender, lang }: FilterSideControlsProps) {
  const { areAllExpanded, collapseAllFilters, expandAllFilters } = useFilterTitleStore()
  const { hideFilters } = useFilterStore()

  return !hideFilters && (
    <div className={`flex items-center gap-5 ${albert_500.className} sm:text-[17px] xl:text-[14px] font-normal`}>

      <div className="flex items-center sm:gap-2 xl:gap-1 sm:mr-7">
        <span
          className="cursor-pointer"
          onClick={() => areAllExpanded ? collapseAllFilters() : expandAllFilters()}
        >{areAllExpanded ? 'Collapse All' : 'Expand All'}
        </span>

        <span className="sm:mb-1 xl:mb-0">{areAllExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}</span>
      </div>

      <Link
        href={`/${lang}/${gender}/products?gender=${gender}&page=1`}
        className="flex items-center xl:gap-1 sm:gap-2">
        <span className="">Clear All</span>

        <div className="sm:mb-1 xl:mb-0">
          <IconReset />
        </div>
      </Link>

    </div>
  )
}
