import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useProductPagination() {
  const [searchParams, router, pathname] = [useSearchParams(), useRouter(), usePathname()];
  const newParams = new URLSearchParams(searchParams);
  const [currentPage, setCurrentPage] = useState<number>(0)
  const queryParamPageValue = Number(newParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(Number(queryParamPageValue));
  }, [queryParamPageValue])

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const target = e.target as HTMLSelectElement;
    const value = target.value;
    const queryParamCategory = "page";

    newParams.set(queryParamCategory, value);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  const getPath = (direction: 'prev' | 'next', queryParamPageValue: number, pages: number) => {
    // handle early return of same page without incrementing the 'page' query param
    const clicksNextOnLastPage = queryParamPageValue === pages && direction === 'next'
    const clicksPrevOnFirstPage = queryParamPageValue === 1 && direction === 'prev'

    if (clicksNextOnLastPage) {
      newParams.set("page", pages.toString())
    }

    if (clicksPrevOnFirstPage || clicksNextOnLastPage) {
      return `${pathname}?${newParams.toString()}`
    }

    // set new 'page' query param
    let oldDirection = currentPage
    let newDirection = {
      prev: (oldDirection - 1).toString(),
      next: (oldDirection + 1).toString(),
    }
    newParams.set("page", newDirection[direction]);
    const link = `${pathname}?${newParams.toString()}`;
    return link;
  }
  return {
    handleOnChange,
    getPath,
    queryParamPageValue,
  }
}
