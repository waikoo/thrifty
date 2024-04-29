import { TSavedFilters } from "@/types/filters"
import { albert_800 } from "@/utils/fonts"
import { usePathname, useRouter } from "next/navigation"

type SavedFiltersInSearchBarProps = {
  savedFilters: TSavedFilters[]
}

export default function SavedFiltersInSearchBar({ savedFilters }: SavedFiltersInSearchBarProps) {
  const [pathname, router] = [usePathname(), useRouter()]

  const handleFilterClick = (item: TSavedFilters) => {
    const newParams = new URLSearchParams(item.filters) // create new searchParams from saved filters
    newParams.set('sort-by', 'newfirst') // reset default sorting params
    newParams.set('shop-by', 'new in')
    newParams.set('page', '1')

    router.push(`${pathname}/products?${newParams}`);
  }

  return (
    <div className="w-full absolute bg-t_white dark:bg-t_black top-[5rem] flex flex-col gap-4 px-4 pb-4 pt-0">
      <span className={`bg-t_black text-t_white dark:bg-t_white dark:text-t_black p-2 w-screen -ml-[2.7rem] text-center text-[1.0625rem] ${albert_800.className}`}>SAVED FILTERS</span>
      {savedFilters.map((item) => (
        <div key={item.filterId} onClick={() => handleFilterClick(item)}>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

