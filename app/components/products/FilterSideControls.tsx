"use client"
import Link from "next/link";
import { useFilterTitleStore } from "@/state/uiState";
import { Category, Locales } from "@/types/home";

type FilterSideControlsProps = {
  category: Category['category']
  lang: Locales
}

export default function FilterSideControls({ category, lang }: FilterSideControlsProps) {

  const expandAllFilters = useFilterTitleStore((state) => state.expandAllComponents)
  const collapseAllFilters = useFilterTitleStore((state) => state.collapseAllComponents)
  const areAllExpanded = useFilterTitleStore((state => state.areAllExpanded))

  return (
    <div className="text-[0.813rem] font-normal">
      <span
        className="cursor-pointer underline underline-offset-4"
        onClick={() => areAllExpanded ? collapseAllFilters() : expandAllFilters()}
      >{areAllExpanded ? 'Collapse All' : 'Expand All'}
      </span>

      <span> / </span>
      <Link href={`/${lang}/${category}/products?category=${category}`}>
        <span className="underline underline-offset-4">Clear All</span>
      </Link>
    </div>
  )
}
