"use client"
import { useEffect, useState } from "react";

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
import { useFilterStore } from "@/state/uiState";

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
  const { changeNotification, deleteFilter, setEditingFilterId, editingFilterId } = useFilterStore()
  const { setShowSavedFiltersPopup, showSavedFiltersPopup, setShowNewFilterPopup } = useFilterStore()

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

  const handleEdit = (e: React.MouseEvent<HTMLDivElement>, filterId: string) => {
    setShowSavedFiltersPopup(false)
    setShowNewFilterPopup(true)
    setEditingFilterId(filterId)
  }

  return (
    <section className="absolute inset-0 z-[60] grid h-screen w-screen place-items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-bkg flex w-[400px] flex-col gap-6 p-7 opacity-100">
        <div onClick={() => setShowSavedFiltersPopup(false)}>
          <IconDelete size={"16"} className="ml-auto cursor-pointer" />
        </div>
        <h1 className="text-content text-center text-[1rem] font-extrabold">SAVED FILTERS</h1>

        <div className="flex items-center gap-4 rounded-full bg-gray-300 p-5 text-black">
          <Toggle
            type="filters"
            thumbColor="peer-checked:after:bg-gray-500"
            toggleBgColor="bg-gray-300"
            thumbBorder="peer-checked:after:border-gray-500"
            toggleBorder="border-[0.1rem] border-gray-500"
          />
          <p className="w-[90%]">Get notified about any changes regarding your saved filters</p>
        </div>

        {savedFilters.map((filter, index) => (
          <div key={filter.name}>
            <div className="flex justify-between">
              <p key={index} className="py-0">{filter.name}</p>
              <div className="flex gap-2">
                <BsThreeDotsVertical color={color} onClick={() => setShowOptions(!showOptions)} className="cursor-pointer" />
                {showOptions && (
                  <>
                    <div onClick={(e) => handleEdit(e, filter.filterId)}>
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
        ))}

        {savedFilters.length === 0 && (
          <p className="text-content text-center text-[1rem] font-extrabold">No saved filters</p>
        )}
      </div>

    </section>
  )
}
