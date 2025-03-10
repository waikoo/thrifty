"use client"
import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useFilterTitleStore, useFilterStore } from "@/state/client/filterState"
import { FilterTitle } from "@/app/components/products"
import { useDbMinMaxValues, useFilterSlider } from "@/app/components/hooks"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"
import { albert_500 } from "@/utils/fonts"

type FilterSliderProps = {
  type: "DISCOUNT" | "PRICE"
  start: number
  end: number
}

export default function FilterSlider({ type, start, end }: FilterSliderProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))
  const [left, setLeft] = useState(start);
  const [right, setRight] = useState(end);
  useDbMinMaxValues(type, setLeft, setRight, left, right) // load initial min & max values from database for price & discount filters
  const { handleLeftChange, handleRightChange, handleInputChange } = useFilterSlider(setLeft, setRight, left, right)
  const [pathname, router, searchParams] = [usePathname(), useRouter(), useSearchParams()]
  const { setIsFilteringProducts } = useFilterStore()

  useEffect(() => { // set default values from URL
    const existingParams = new URLSearchParams(searchParams)
    const queryParamCategory = lowerCaseSpaceToDash(type)

    if (existingParams.has(queryParamCategory)) {
      const existingValues = existingParams.get(queryParamCategory)!.split(',')
      setLeft(Number(existingValues[0]))
      setRight(Number(existingValues[1]))
    }
    setIsFilteringProducts(true)
  }, [])

  function onMouseOrKeyUpHandler(): void {
    const newParams = new URLSearchParams(searchParams)
    const queryParamCategory = lowerCaseSpaceToDash(type)

    if (!newParams.has(queryParamCategory)) { // add new values if they don't exist in URL
      newParams.append(queryParamCategory, `${left},${right}`)
    } else { // update existing values in URL
      newParams.set(queryParamCategory, `${left},${right}`)
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false })
  }

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="w-full">
          <div className="slider relative flex"
            onMouseUp={onMouseOrKeyUpHandler}
            onTouchEnd={onMouseOrKeyUpHandler}
          >
            <input
              type="range"
              min={start}
              max={end}
              step="5"
              data-direction="right"
              value={right}
              onChange={(e) => handleRightChange(e)}
              className="range_slider pointer-events-none absolute right-0 top-8 z-20 h-[0.12rem] w-full cursor-pointer appearance-none rounded" />
            <input
              type="range"
              min={start}
              max={end}
              step="5"
              data-direction="left"
              value={left}
              onChange={(e) => handleLeftChange(e)}
              className="range_slider pointer-events-none absolute left-0 top-8 z-20 h-[0.12rem] w-full cursor-pointer appearance-none rounded bg-t_black dark:bg-t_white" />
          </div>

          <div className={`flex justify-between ${albert_500.className} text-[13px] sm:text-[17px] xl:text-[14px]`}
            onKeyUp={onMouseOrKeyUpHandler}
          >
            <div>
              <span>{type === 'DISCOUNT' ? '%' : '€'} </span>
              <input
                type="text"
                name="left"
                value={left}
                className="text-[#1b1b1b] dark:t_white focus:bg-t_mustard mt-12 h-[35px] sm:h-10 w-20 bg-t_white border-[0.2rem] border-[#e3e3e3] rounded-full text-center hover:bg-gray-200"
                onChange={handleInputChange} />
            </div>

            <span className="text-[#c2c2c2] dark:t_white mt-12">_</span>

            <div>
              <span>{type === 'DISCOUNT' ? '%' : '€'} </span>
              <input
                type="text"
                name="right"
                value={right}
                className="text-[#1b1b1b] dark:t_white focus:bg-t_mustard mt-12 h-[35px] sm:h-10 w-20 bg-t_white border-[0.2rem] border-[#e3e3e3] rounded-full text-center hover:bg-gray-200"
                onChange={handleInputChange} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
