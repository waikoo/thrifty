"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { FilterSearch, FilterTitle } from "@/app/components/products"
import { useFilterSearch, useQueryParams } from "@/app/components/hooks"
import { useFilterTitleStore } from "@/state/uiState"

type FilterCheckboxProps = {
  type: string
  // elements: any
  elements: string[]
  search?: boolean
}

export default function FilterCheckbox({ type, elements, search }: FilterCheckboxProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const { setSearchValue, filteredItems } = useFilterSearch(elements)
  const [searchParamos, pathname, router] = [useSearchParams(), usePathname(), useRouter()]
  const { checkbox, onCheckboxChange, updateQueryParams } = useQueryParams(type, elements, searchParamos, router, pathname)

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="flex flex-col gap-2 pl-8 pt-4">

          {search && <FilterSearch setSearchValue={setSearchValue} />}

          <fieldset onChange={updateQueryParams} className="flex flex-col">
            {filteredItems.map((element, i) => {
              const lowerCaseName = type.toLowerCase()
              const lowerCaseElement = element.toLowerCase()

              // console.log(lowerCaseElement)
              return (
                <label
                  htmlFor={`${lowerCaseName}-${i}`}
                  className="flex select-none gap-2 text-[0.75rem]"
                  key={`${lowerCaseName}-${i}`}>
                  <input
                    type="checkbox"
                    id={`${lowerCaseName}-${i}`}
                    checked={checkbox[lowerCaseElement] === true}
                    onChange={onCheckboxChange}
                    value={lowerCaseElement}
                    className="form-checkbox border-grey checked:bg-darkgrey checked:border-darkgrey h-4 w-4 cursor-pointer appearance-none border bg-white outline-[0.1rem] outline-white ring-2 ring-white checked:border-[0.1rem] checked:outline-[0.2rem] checked:outline-white"
                  />
                  {element}
                </label>
              )
            })}
          </fieldset>
        </div>
      )}
    </div>
  )
}
