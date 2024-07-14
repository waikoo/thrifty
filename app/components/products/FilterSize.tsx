"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { FilterTitle } from "@/app/components/products"
import { useFilterSearch } from "@/app/components/hooks"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"
import { useFilterTitleStore, useFilterStore } from "@/state/client/filterState"
import { albert_500 } from "@/utils/fonts"

type FilterSizeProps = {
  type: 'SIZE'
  sizes: string[]
}

export default function FilterSize({ type, sizes }: FilterSizeProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const { filteredItems } = useFilterSearch(sizes)
  const [pathname, router, searchParamos] = [usePathname(), useRouter(), useSearchParams()]
  const { setIsFilteringProducts } = useFilterStore()

  const handleOnChange = (e: React.ChangeEvent<HTMLFieldSetElement> | React.MouseEvent<HTMLFieldSetElement>) => {
    const newParams = new URLSearchParams(searchParamos);
    const value = (e.target as HTMLDivElement).dataset.value!;
    const queryParamCategory = lowerCaseSpaceToDash(type)

    if (!newParams.has(queryParamCategory)) {
      newParams.append(queryParamCategory, value);
    } else {
      const existingValues = newParams.get(queryParamCategory)?.split(',') || [];
      if (existingValues.includes(value)) {
        const newValues = existingValues.filter(val => val !== value);
        newValues.length > 0
          ? newParams.set(queryParamCategory, newValues.join(','))
          : newParams.delete(queryParamCategory);
      } else {
        existingValues.push(value);
        newParams.set(queryParamCategory, existingValues.join(','));
      }
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return (
    <div>
      <FilterTitle
        type={type}
      />

      {isExpanded && (
        <div className="">

          <fieldset
            className="grid w-full select-none grid-cols-5 sm:grid-cols-12 xl:grid-cols-4 gap-1 pt-4 h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-t_white"
            onClick={handleOnChange}>

            {filteredItems.map((size, i) => {
              const colorOnClick =
                searchParamos.get('size') === size || searchParamos.get('size')?.split(',').includes(size)
                  ? 'bg-t_mustard text-t_black'
                  : 'text-t_black bg-t_white'

              return (
                <div
                  key={`sizes-${i}`}
                  data-value={size}
                  onClick={() => setIsFilteringProducts(true)}
                  className={`grid cursor-pointer place-items-center border-[0.1rem] p-3 text-[13px] sm:text-[16px] xl:text-[13px] focus:bg-t_mustard rounded-[5px] ${albert_500.className} ${colorOnClick}`}
                >
                  {size}</div>
              )
            })}

          </fieldset>
        </div>
      )}
    </div>
  )
}
