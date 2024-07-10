import { useEffect } from "react";

import FilterItem from "@/app/components/products/FilterItem";
import { useFilterStore } from "@/state/client/filterState";
import { capitalize } from "@/utils/capitalize";
import { TSavedFilters } from "@/types/filters";
import { albert_800 } from "@/utils/fonts";

type FilterItemsProps = {
  renderedFilters: { [key: string]: string | string[] | undefined } | TSavedFilters["filters"]
  className?: string
}

export default function FilterItems({ renderedFilters, className }: FilterItemsProps) {
  const { currentFilters, setCurrentFilters } = useFilterStore()

  useEffect(() => { // remove sorting and pagination params
    if (renderedFilters['sort-by']) delete renderedFilters['sort-by']
    if (renderedFilters['page']) delete renderedFilters['page']

    setCurrentFilters(renderedFilters);
  }, [renderedFilters]);

  return (
    <>
      {Object.entries(currentFilters).map(([key, value]) => { // searchParams from URL
        if (['page', 'sort-by'].includes(key)) return null

        return (
          <div key={key} className={className}>
            <span className={`text-t_black sm:text-[16px] xl:text-[13px] ${albert_800.className}`}>{key.toUpperCase()}</span>

            {typeof value === 'string' && value.split(',').length > 1
              ? value.split(',').map((item) => <FilterItem key={item} objectKey={key}>{capitalize(item)}</FilterItem>)
              : typeof value === 'string' && <FilterItem objectKey={key}>{capitalize(value)}</FilterItem>}
          </div>
        )
      })}
    </>
  )
}
