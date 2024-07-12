"use client"
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useFilterStore, useFilterTitleStore } from "@/state/client/filterState";
import { Gender, Locales } from "@/types/link";
import { IconReset } from "@/app/components/products/icons";
import { albert_500, albert_800 } from "@/utils/fonts";
import useViewport from "@/app/components/hooks/useViewport";

type FilterSideControlsProps = {
  gender: Gender
  lang: Locales
  className: string
}

export default function FilterSideControls({ gender, lang, className }: FilterSideControlsProps) {
  const { areAllExpanded, collapseAllFilters, expandAllFilters } = useFilterTitleStore()
  const { hideFilters } = useFilterStore()
  const currentViewport = useViewport()
  const fontStyles = currentViewport < 640 ? albert_800.className : albert_500.className

  return !hideFilters && (
    <div className={`${className} flex items-center gap-5 ${fontStyles} text-[13px] sm:text-[17px] xl:text-[14px] font-normal`}>

      <div className="flex items-center gap-2 xl:gap-1 sm:mr-7">
        <span
          className="cursor-pointer"
          onClick={() => areAllExpanded ? collapseAllFilters() : expandAllFilters()}
        >{areAllExpanded ? 'Collapse All' : 'Expand All'}
        </span>

        <span className="sm:mb-1 xl:mb-0">{areAllExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}</span>
      </div>

      <Link
        href={`/${lang}/${gender}/products?gender=${gender}&page=1`}
        className="flex items-center xl:gap-1 gap-2">
        <span className="">Clear All</span>

        <div className="sm:mb-1 xl:mb-0">
          <IconReset />
        </div>
      </Link>

    </div>
  )
}
