"use client"
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { RxCross1 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

import Toggle from "@/app/components/Toggle";
import IconDelete from "@/app/components/cart/icons/IconDelete";
import { supabase } from "@/app/supabase";
import { TSavedFilters } from "@/types/filters";
import { useThemeStore } from "@/state/themeState";
import useUserSession from "@/app/components/hooks/useUserSession";
import { useFilterStore } from "@/state/client/filterState";
import WithCloseButton from "../navigation/WithCloseButton";
import { albert, albert_500, albert_800 } from "@/utils/fonts";

export default function SavedFilters() {
  const [savedFilters, setSavedFilters] = useState<TSavedFilters[]>([] as TSavedFilters[])
  const [showOptions, setShowOptions] = useState(false)
  const { theme } = useThemeStore()
  const color = theme === 'light' ? 'black' : 'white'
  const { session } = useUserSession()
  let client_id: string
  if (session) {
    client_id = session.user.id
  }
  const { changeNotification, deleteFilter, setEditingFilterId, setShowSavedFiltersPopup, setShowNewFilterPopup, getFilterFromDb } = useFilterStore()
  const [router, pathname] = [useRouter(), usePathname()]
  const optionsRef = useRef<HTMLDivElement | null>(null)

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

  const handleShowOptions = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    setShowOptions(!showOptions)
  }

  const handleEdit = (filterId: string) => {
    setShowSavedFiltersPopup(false)
    setShowNewFilterPopup(true)
    setEditingFilterId(filterId)
  }

  async function handleRunFilter(e: React.MouseEvent<HTMLDivElement>, filterId: string) {
    setShowSavedFiltersPopup(false)
    const filterFromDb = await getFilterFromDb(client_id, filterId)

    const newParams = new URLSearchParams(filterFromDb.filters) // create new searchParams from saved filters
    newParams.set('sort-by', 'newfirst') // reset default sorting params
    newParams.set('page', '1')

    router.push(`${pathname}?${newParams}`);
  }

  return (
    <WithCloseButton onClose={() => setShowSavedFiltersPopup(false)} padding="p-8">
      <h1 className={`mb-3 text-t_black text-center text-[14px] ${albert_800.className}`}>SAVED FILTERS</h1>

      <div className="flex items-center gap-4 rounded-full bg-[#f2f2f2] p-5 text-black">
        <Toggle
          type="filters"
          thumbColor="peer-checked:after:bg-t_black after:bg-t_white"
          toggleBgColor="bg-[#c2c2c2] peer-checked:bg-t_mustard"
          thumbBorder="peer-checked:after:border-gray-500"
          toggleBorder="border-[0.1rem] border-gray-500"
        />
        <p className={`w-[90%] text-[14px] ${albert_500.className}`}>Get notified about any changes regarding your saved filters</p>
      </div>

      {savedFilters ? savedFilters.map((filter, index) => (
        <div key={filter.name} onClick={(e) => handleRunFilter(e, filter.filterId)} className="cursor-pointer" title="Select filter">
          <div className="flex justify-between">
            <p key={index} className={`py-0 text-[14px] ${albert_500.className}`}>{filter.name}</p>
            <div className="flex gap-2" >
              <div ref={optionsRef} >
                <BsThreeDotsVertical color={color} onClick={(e: React.MouseEvent<SVGElement>) => handleShowOptions(e)} className="cursor-pointer" />
              </div>
              {showOptions && (
                <>
                  <div onClick={() => handleEdit(filter.filterId)} >
                    <MdEdit color={color} className="cursor-pointer" />
                  </div>
                  <IoMdNotifications color={color} className="cursor-pointer" onClick={() => changeNotification(filter.filterId, client_id)} />
                  <RxCross1 color={color} className="cursor-pointer" onClick={() => deleteFilter(filter.filterId, client_id)} />
                </>
              )
              }
            </div>
          </div>
          <hr />
        </div>
      )) : (
        <p className={`mt-3 text-content text-center text-[14px] ${albert.className}`}>No saved filters</p>
      )}

    </WithCloseButton>
  )
}
