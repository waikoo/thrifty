import { brandNamesArray } from "@/app/components/data/brandsData"
import { ReadonlyURLSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

const getParams = (searchParamos: ReadonlyURLSearchParams, productType: string[]) => {

  if (!searchParamos.getAll('gender')[0]) {
    // TODO: handle
  }
  const gend = searchParamos.getAll('gender')?.[0]?.split(',')
  const cat = searchParamos.getAll('category')?.[0]?.split(',')
  const shopBy = searchParamos.getAll('shop-by')?.[0]?.split(',')
  const brandParam = searchParamos.getAll('brand')?.[0]?.split(',')
  const typeParam = searchParamos.getAll('type')?.[0]?.split(',')

  const others = {
    men: gend.includes('men'),
    women: gend.includes('women'),
    kids: gend.includes('kids'),
    clothing: cat?.includes('clothing'),
    shoes: cat?.includes('shoes'),
    accessories: cat?.includes('accessories'),
    promos: shopBy?.includes('promos'),
    ['new in']: shopBy?.includes('new in'),
  } as { [key: string]: boolean }

  const brands = brandNamesArray.reduce((acc, brand) => {
    acc[brand.toLowerCase()] = brandParam?.includes(brand.toLowerCase())
    return acc
  }, {} as { [key: string]: boolean })

  const dynamicTypes = productType.reduce((acc, type) => {
    acc[type.toLowerCase()] = typeParam?.includes(type.toLowerCase())
    return acc
  }, {} as { [key: string]: boolean })


  const computedParamState = { ...others, ...brands, ...dynamicTypes }

  return computedParamState
}

export default function useQueryParams(type: string, elements: string[], searchParamos: ReadonlyURLSearchParams, router: AppRouterInstance, pathname: string) {

  const [checkbox, setCheckbox] = useState(getParams(searchParamos, elements))

  useEffect(() => {
    setCheckbox(getParams(searchParamos, elements))
  }, [searchParamos])

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as unknown as HTMLInputElement).value;
    setCheckbox(prevState => ({
      ...prevState,
      [value]: !prevState[value as keyof typeof prevState],
    }));
  }

  const updateQueryParams = (e: React.ChangeEvent<HTMLFieldSetElement>) => {
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

  return {
    checkbox,
    onCheckboxChange,
    updateQueryParams
  }
}
