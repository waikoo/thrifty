"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { FilterSearch, FilterTitle } from "@/app/components/products"
import { useFilterSearch, useQueryParams } from "@/app/components/hooks"
import { useFilterTitleStore } from "@/state/client/filterState"
import { albert_500, albert_600 } from "@/utils/fonts"

type FilterCheckboxProps = {
  type: string
  elements: string[]
  search?: boolean
}

export default function FilterCheckbox({ type, elements, search }: FilterCheckboxProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const { setSearchValue, filteredItems } = useFilterSearch(elements)
  const [searchParamos, pathname, router] = [useSearchParams(), usePathname(), useRouter()]
  const { checkbox, onCheckboxChange, updateQueryParams } = useQueryParams(type, elements, searchParamos, router, pathname)

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="flex flex-col gap-2 pt-4">

          {search && <FilterSearch setSearchValue={setSearchValue} type={type} />}

          <fieldset onChange={updateQueryParams} className="flex flex-col max-h-[300px] xl:max-h-[200px] overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-t_white">

            {filteredItems.map((element, i) => {
              const lowerCaseName = type.toLowerCase()
              const lowerCaseElement = element.toLowerCase()
              const boldStyle = checkbox[lowerCaseElement] ? `${albert_600.className}` : `${albert_500.className}`

              return (
                <label
                  htmlFor={`${lowerCaseName}-${i}`}
                  className={`flex select-none gap-2 text-[13px] sm:text-[17px] xl:text-[14px] mt-[0.375rem] ${boldStyle}`}
                  key={`${lowerCaseName}-${i}`}>
                  <input
                    type="checkbox"
                    id={`${lowerCaseName}-${i}`}
                    checked={checkbox[lowerCaseElement] === true}
                    onChange={onCheckboxChange}
                    value={lowerCaseElement}
                    className="form-checkbox h-4 w-4 cursor-pointer appearance-none border bg-white outline-[0.1rem] outline-white ring-2 ring-white checked:border-[0.1rem] checked:outline-[0.2rem] checked:outline-white checked:bg-t_black hover:bg-[#e3e3e3] text-t_black"
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
