import { usePathname, useRouter } from "next/navigation"

import { TSavedFilters } from "@/types/filters"
import { useNavigationStore } from "@/state/client/navigationState"

type SavedFiltersInSearchBarProps = {
  savedFilters: TSavedFilters[]
}

export default function SavedFiltersInSearchBar({ savedFilters }: SavedFiltersInSearchBarProps) {
  const [pathname, router] = [usePathname(), useRouter()]
  const { setShowMobileSearch } = useNavigationStore()

  const handleFilterClick = (item: TSavedFilters) => {
    const newParams = new URLSearchParams(item.filters) // create new searchParams from saved filters
    newParams.set('sort-by', 'newfirst') // reset default sorting params
    newParams.set('shop-by', 'new in')
    newParams.set('page', '1')

    setShowMobileSearch(false)
    router.push(`${pathname}/products?${newParams}`);
  }

  return (
    <div className="text-t_black w-full bg-t_white dark:bg-t_black top-[5rem] flex flex-col gap-4 px-4 pb-4">
      <div className="mt-4">
        {savedFilters.map((item) => (
          <div key={item.filterId} onClick={() => handleFilterClick(item)}>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

