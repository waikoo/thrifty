import { useEffect } from "react";

import FilterItem from "@/app/components/products/FilterItem";
import { useFilterStore } from "@/state/uiState";
import { capitalize } from "@/utils/capitalize";

type FilterItemsProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function FilterItems({ searchParams }: FilterItemsProps) {
  const { currentFilters, setCurrentFilters } = useFilterStore()

  useEffect(() => { // remove sorting and pagination params
    const filteredSearchParams = Object.fromEntries(
      Object.entries(searchParams).filter(([key]) => key !== 'sort-by' && key !== 'page')
    );
    setCurrentFilters(filteredSearchParams);
  }, []);

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
