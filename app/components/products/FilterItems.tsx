import { useEffect } from "react";

import FilterItem from "@/app/components/products/FilterItem";
import { useFilterStore } from "@/state/uiState";
import { capitalize } from "@/utils/capitalize";
import { TSavedFilters } from "@/types/filters";

type FilterItemsProps = {
  renderedFilters: { [key: string]: string | string[] | undefined } | TSavedFilters["filters"]
}

export default function FilterItems({ renderedFilters }: FilterItemsProps) {
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
          <div key={key}>
            <span className="text-content">{key.toUpperCase()}</span>

            {typeof value === 'string' && value.split(',').length > 1
              ? value.split(',').map((item) => <FilterItem key={item} objectKey={key}>{capitalize(item)}</FilterItem>)
              : typeof value === 'string' && <FilterItem objectKey={key}>{capitalize(value)}</FilterItem>}
          </div>
        )
      })}
    </>
  )
}
