"use client"
import { useEffect, useState } from "react"
import { ReadonlyURLSearchParams } from "next/navigation"

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

import { lowerCaseSpaceToDash } from "@/utils/lowerCaseSpaceToDash"

const getParams = (searchParamos: ReadonlyURLSearchParams, productType: string[]) => {

  const gend = searchParamos.getAll('gender')?.[0]?.split(',')
  const cat = searchParamos.getAll('category')?.[0]?.split(',')
  const shopBy = searchParamos.getAll('shop-by')?.[0]?.split(',')
  const brandParam = searchParamos.getAll('brand')?.[0]?.split(',')
  const typeParam = searchParamos.getAll('type')?.[0]?.split(',')
  const conditionParam = searchParamos.getAll('condition')?.[0]?.split(',')

  const others = {
    men: gend?.includes('men'),
    women: gend?.includes('women'),
    kids: gend?.includes('kids'),
    clothing: cat?.includes('clothing'),
    shoes: cat?.includes('shoes'),
    accessories: cat?.includes('accessories'),
    promos: shopBy?.includes('promos'),
    ['new in']: shopBy?.includes('new_in'),
    ['new with tag']: conditionParam?.includes('new with tag'),
    ['new without tag']: conditionParam?.includes('new without tag'),
    ['second hand']: conditionParam?.includes('second hand'),
  } as { [key: string]: boolean }

  const brands: { [key: string]: boolean } = {};
  for (const brand of productType) {
    if (brandParam) {
      brands[brand.toLowerCase()] = brandParam.includes(brand.toLowerCase());
    }
  }

  const dynamicTypes: { [key: string]: boolean } = {};
  for (const type of productType) {
    if (typeParam) {
      dynamicTypes[type.toLowerCase()] = typeParam.includes(type.toLowerCase());
    }
  }

  const computedParamState = { ...others, ...brands, ...dynamicTypes }

  return computedParamState
}

export default function useQueryParams(type: string, elements: string[], searchParamos: ReadonlyURLSearchParams, router: AppRouterInstance, pathname: string) {

  const [checkbox, setCheckbox] = useState(getParams(searchParamos, elements))
  useEffect(() => {
    setCheckbox(getParams(searchParamos, elements))
  }, [searchParamos, elements])

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

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }

  return {
    checkbox,
    onCheckboxChange,
    updateQueryParams
  }
}
