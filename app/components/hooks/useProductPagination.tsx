import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useProductPagination() {
  const [searchParams, router, pathname] = [useSearchParams(), useRouter(), usePathname()];
  const newParams = new URLSearchParams(searchParams);
  const [currentPage, setCurrentPage] = useState<number>(0)
  const pageValue = Number(newParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(Number(pageValue));
  }, [pageValue])

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const value = (e.target as unknown as HTMLSelectElement).value;
    const queryParamCategory = "page";

    newParams.set(queryParamCategory, value);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  const getPath = (direction: 'prev' | 'next') => {
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
    currentPage,
    handleOnChange,
    getPath,
    pageValue,
  }
}
