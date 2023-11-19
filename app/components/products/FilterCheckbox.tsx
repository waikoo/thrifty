"use client"
import { FilterSearch, FilterTitle } from "."
import { useClearTitle, useFilterSearch, useFilterTitle } from "../hooks"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"
import getLangAndCategory from "@/utils/getLangAndCategory"
import { useState } from "react"

type FilterCheckboxProps = {
  type: string
  elements: string[]
  search?: boolean
}

export default function FilterCheckbox({ type, elements, search }: FilterCheckboxProps) {
  const { isExpanded, setIsExpanded } = useFilterTitle()
  const { setSearchValue, filteredItems } = useFilterSearch(elements)
  const searchParamos = useSearchParams()

  const [checkbox, setCheckbox] = useState(() => {
    const category = searchParamos.get('category')

    return {
      men: category === 'men',
      women: category === 'women',
      kids: category === 'kids',
    } as { [key: string]: boolean }
  })

  const router = useRouter()
  const pathname = usePathname()

  const clearedLink = useClearTitle(type)
  const { lang, category } = getLangAndCategory(pathname)

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as unknown as HTMLInputElement).value;
    setCheckbox(prevState => ({
      ...prevState,
      [value]: !prevState[value as keyof typeof prevState],
    }));
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
    const newParams = new URLSearchParams(searchParamos);
    const value = (e.target as unknown as HTMLInputElement).value;
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

    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div>
      <FilterTitle
        type={type}
        lang={lang}
        category={category}
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        clearedLink={clearedLink}
      />

      {isExpanded && (
        <div className="flex flex-col gap-2 pl-8 pt-4">

          {search && (
            <FilterSearch setSearchValue={setSearchValue} />
          )}
          <fieldset onChange={handleOnChange} className="flex flex-col">
            {filteredItems.map((element, i) => {
              const lowerCaseName = type.toLowerCase()
              const lowerCaseElement = element.toLowerCase()

              return (
                <label
                  htmlFor={`${lowerCaseName}-${i}`}
                  className="flex select-none gap-2 text-[0.75rem]"
                  key={`${lowerCaseName}-${i}`}>
                  <input
                    type="checkbox"
                    id={`${lowerCaseName}-${i}`}
                    checked={checkbox[lowerCaseElement as string] === true}
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
