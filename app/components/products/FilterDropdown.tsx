"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function FilterDropdown() {
  const [searchParams, router, pathname] = [useSearchParams(), useRouter(), usePathname()]

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams);
    const value = (e.target as unknown as HTMLSelectElement).value;
    const queryParamCategory = 'sort-by'

    newParams.set(queryParamCategory, value);

    router.push(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="flex cursor-pointer items-center justify-center gap-2">
      <span className="self-center text-[0.875rem] font-medium">Sort By</span>
      <div className="flex justify-center gap-2">
        <select
          className="text-content bg-t_white w-44 cursor-pointer border-0 p-2 ring-0"
          onChange={handleOnChange}>
          <option value="newfirst">Newest to Oldest</option>
          <option value="cheapfirst">Price: Low to High</option>
          <option value="expensivefirst">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}
