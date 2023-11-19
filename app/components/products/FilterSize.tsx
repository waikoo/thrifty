"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FilterSearch, FilterTitle } from "."
import { useClearTitle, useFilterSearch, useFilterTitle } from "../hooks"
import getLangAndCategory from "@/utils/getLangAndCategory"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"

type FilterSizeProps = {
  type: 'SIZE'
  sizes: string[]
}

export default function FilterSize({ type, sizes }: FilterSizeProps) {
  const { isExpanded, setIsExpanded } = useFilterTitle()
  const { setSearchValue, filteredItems } = useFilterSearch(sizes)
  const clearedLink = useClearTitle(type)
  const pathname = usePathname()
  const router = useRouter()
  const searchParamos = useSearchParams()
  const { lang, category } = getLangAndCategory(pathname)

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
        <div className="px-8">

          <FilterSearch setSearchValue={setSearchValue} />

          <fieldset
            className="grid cursor-pointer select-none grid-cols-4 gap-2 pt-4"
            onClick={handleOnChange}>
            {filteredItems.map((size, i) => {
              const colorOnClick =
                !searchParamos.get('size')
                  ? 'text-content bg-bkg'
                  : (searchParamos.get('size') && searchParamos.get('size')?.includes(size))
                    ? 'text-bkg bg-content'
                    : 'bg-bkg text-content';




              return (
                <div
                  key={`sizes-${i}`}
                  data-value={size}
                  className={`grid place-items-center border-[0.1rem] p-1 px-4 ${colorOnClick}`}
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
