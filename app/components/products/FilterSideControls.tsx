"use client"
import Link from "next/link";
import { useFilterTitleStore } from "@/state/uiState";
import { Category, Locales } from "@/types/home";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrPowerReset } from 'react-icons/gr'
import { IconReset } from "./icons";

type FilterSideControlsProps = {
  gender: Category['category']
  lang: Locales
}

export default function FilterSideControls({ gender, lang }: FilterSideControlsProps) {
  const expandAllFilters = useFilterTitleStore((state) => state.expandAllComponents)
  const collapseAllFilters = useFilterTitleStore((state) => state.collapseAllComponents)
  const areAllExpanded = useFilterTitleStore((state => state.areAllExpanded))

  return (
    <div className="flex items-center gap-5 text-[0.813rem] font-normal">
      <div className="flex items-center gap-1">
        <span
          className="cursor-pointer"
          onClick={() => areAllExpanded ? collapseAllFilters() : expandAllFilters()}
        >{areAllExpanded ? 'Collapse All' : 'Expand All'}
        </span>
        <span>{areAllExpanded ? (<AiOutlineMinus />) : (<AiOutlinePlus />)}</span>
      </div>

      <Link
        href={`/${lang}/${gender}/products?gender=${gender}`}
        className="flex items-center gap-1">
        <span className="">Reset All</span>
        <IconReset />
      </Link>
    </div>
  )
}
