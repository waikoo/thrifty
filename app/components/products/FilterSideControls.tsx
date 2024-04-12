"use client"
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useFilterStore, useFilterTitleStore } from "@/state/client/filterState";
import { Category, Locales } from "@/types/home";
import { IconReset } from "@/app/components/products/icons";

type FilterSideControlsProps = {
  gender: Category['category']
  lang: Locales
}

export default function FilterSideControls({ gender, lang }: FilterSideControlsProps) {
  const { areAllExpanded, collapseAllFilters, expandAllFilters } = useFilterTitleStore()
  const { hideFilters } = useFilterStore()

  return !hideFilters && (
    <div className="bg-bkg flex items-center gap-5 text-[0.813rem] font-normal">
      <div className="flex items-center gap-1">
        <span
          className="cursor-pointer"
          onClick={() => areAllExpanded ? collapseAllFilters() : expandAllFilters()}
        >{areAllExpanded ? 'Collapse All' : 'Expand All'}
        </span>
        <span>{areAllExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}</span>
      </div>

      <Link
        href={`/${lang}/${gender}/products?gender=${gender}&page=1`}
        className="flex items-center gap-1">
        <span className="">Reset All</span>
        <IconReset />
      </Link>
    </div>
  )
}
