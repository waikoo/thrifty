"use client"
import { useState, useRef, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation";

import { BsThreeDotsVertical } from "react-icons/bs";

import { supabase } from "@/app/supabase";
import { albert, albert_500 } from "@/utils/fonts";
import { TSavedFilters } from "@/types/filters"
import { useFilterStore } from "@/state/client/filterState";
import useUserSession from "@/app/components/hooks/useUserSession";
import SavedFiltersListOptions from "./SavedFiltersListOptions";
import { useThemeStore } from "@/state/themeState";

type SavedFiltersListProps = {
}

export default function SavedFiltersList({ }: SavedFiltersListProps) {
  const [savedFilters, setSavedFilters] = useState<TSavedFilters[]>([] as TSavedFilters[])
  const [showOptions, setShowOptions] = useState<{ [key: string]: boolean }>({})
  const { setShowSavedFiltersPopup, getFilterFromDb } = useFilterStore()
  const { session } = useUserSession()
  const [router, pathname] = [useRouter(), usePathname()]
  const optionsRef = useRef<HTMLDivElement | null>(null)
  const { theme } = useThemeStore()
  const color = theme === 'light' ? 'black' : 'white'
  let client_id: string
  if (session) {
    client_id = session.user.id
  }

  const channels = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'clients' },
      (payload) => {
        setSavedFilters((payload.new as { saved_filters: TSavedFilters[] }).saved_filters)
      }
    )
    .subscribe()

  useEffect(() => {
    const getSavedFilters = async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('saved_filters')
      if (error) console.error(error)
      return data
    }

    getSavedFilters().then(data => {
      setSavedFilters(data?.[0].saved_filters)
    })
  }, [])

  const handleShowOptions = (e: React.MouseEvent<SVGElement>, filterId: string) => {
    e.stopPropagation()
    setShowOptions(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }))
  }

  async function handleRunFilter(e: React.MouseEvent<HTMLDivElement>, filterId: string) {
    setShowSavedFiltersPopup(false)
    const filterFromDb = await getFilterFromDb(client_id, filterId)

    const newParams = new URLSearchParams(filterFromDb.filters) // create new searchParams from saved filters
    newParams.set('sort-by', 'newfirst') // reset default sorting params
    newParams.set('page', '1')

    router.push(`${pathname}?${newParams}`);
  }

  return savedFilters ? savedFilters.map((filter, index) => {

    return (
      <div key={filter.name}
        onClick={(e) => handleRunFilter(e, filter.filterId)}
        className="mt-5 cursor-pointer"
        title="Select Filter"
      >
        <div className="flex justify-between">
          <p key={index} className={`py-0 text-[13px] sm:text-[17px] xl:text-[14px] ${albert_500.className}`}>
            {filter.name}
          </p>

          <div className="flex gap-2" >
            <div ref={optionsRef} >
              <BsThreeDotsVertical
                color={color}
                onClick={(e: React.MouseEvent<SVGElement>) => handleShowOptions(e, filter.filterId)}
                className="cursor-pointer"
                title={showOptions[filter.filterId] ? "Collapse" : "Expand"}
              />
            </div>

            {showOptions[filter.filterId] && (
              <SavedFiltersListOptions
                filter={filter}
                color={color}
                client_id={client_id}
              />
            )}
          </div>
        </div>
      </div>
    )
  }) : (
    <p className={`mt-3 text-t_black dark:text-t_white text-center text-[13px] sm:text-[17px] xl:text-[14px] ${albert.className}`}></p>
  )
}

