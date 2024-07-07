"use client"
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid'

import IconDelete from "@/app/components/cart/icons/IconDelete";
import AnimatedInput from "@/app/components/AnimatedInput";
import FilterItems from "@/app/components/products/FilterItems";
import { useFilterStore } from "@/state/client/filterState";
import useUserSession from "@/app/components/hooks/useUserSession";
import { supabase } from "@/app/supabase";
import { TSavedFilters } from "@/types/filters";
import WithCloseButton from "../navigation/WithCloseButton";
import { albert, albert_500, albert_800 } from "@/utils/fonts";

type SetNewFilterProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function SetNewFilter({ searchParams }: SetNewFilterProps) {
  const [filterName, setFilterName] = useState<string>("")
  const [filterNotification, setFilterNotification] = useState<boolean>(false)
  const [showNoFilterNameError, setShowNoFilterNameError] = useState<boolean>(false)
  const { currentFilters, saveFilterToDb, setShowNewFilterPopup, editingFilterId, setEditingFilterId, updateFilterInDb } = useFilterStore()
  const { session, error } = useUserSession()
  const [matchedFilter, setMatchedFilter] = useState({} as TSavedFilters["filters"])
  const [matchedFilterObject, setMatchedFilterObject] = useState({} as TSavedFilters)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(e.target.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!filterName) {
      setShowNoFilterNameError(true)
      return
    }

    if (!editingFilterId) {
      const newFilter = {
        name: filterName,
        wantsNotification: filterNotification,
        filterId: uuidv4(),
        filters: currentFilters
      }

      const client_id = session?.user.id
      const client_email = session?.user.email

      if (client_id && client_email) {
        saveFilterToDb(newFilter, client_id, client_email)
      }
    } else {
      const client_id = session?.user.id
      if (client_id) {
        matchedFilterObject.name = filterName
        matchedFilterObject.wantsNotification = filterNotification
        matchedFilterObject.filters = currentFilters
        updateFilterInDb(matchedFilterObject, client_id)
      }
    }

    setShowNewFilterPopup(false)
    setEditingFilterId('')
  }

  useEffect(() => {
    const getUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      return user?.id
    }

    const getFilters = async () => {
      const isSession = await supabase.auth.getSession()
      if (!isSession.data.session) return

      try {

        const userId = await getUserId();

        const { data, error } = await supabase
          .from('clients')
          .select('saved_filters')
          .eq('client_id', userId);

        if (error) {
          console.error(error);
        } else if (data) {
          const savedFilters = data[0].saved_filters;
          if (savedFilters) {
            const matchedFilter = savedFilters.filter((filter: { filterId: string }) => {
              return filter.filterId === editingFilterId
            });
            setFilterName(matchedFilter[0].name);
            setMatchedFilter(matchedFilter[0].filters);
            setMatchedFilterObject(matchedFilter[0])
          }
        }
      } catch (error) {
        console.error('Error fetching filters:', error);
      }
    };

    if (editingFilterId) {
      getFilters();
    }
  }, []);

  return (
    <WithCloseButton onClose={() => setShowNewFilterPopup(false)}>

      <h1 className={`mb-10 text-t_black dark:text-t_white text-center text-[17px] ${albert_800.className}`}>
        SET NEW FILTER
      </h1>

      <AnimatedInput
        type="text"
        id="filterName"
        placeholder="Jackets in black and brown"
        value={filterName}
        onChange={handleOnChange}
        className="border-t_black border-b-[0.1rem] border-l-0 border-r-0 border-t-0"
        font={`xl:text-[16px] ${albert_500.className} text-t_black dark:text-t_white`}
      />

      {showNoFilterNameError && (
        <span className={`text-red text-[0.8125rem] ${albert.className}`}>Please enter a filter name</span>
      )}

      <div className="mt-5">
        <FilterItems
          renderedFilters={Object.keys(matchedFilter).length > 0 ? matchedFilter : searchParams}
          className="mt-1"
        />
      </div>

      <label className="flex items-center gap-2 my-8">
        <input type="checkbox" checked={filterNotification} onChange={() => setFilterNotification(!filterNotification)} />
        <span className={`text-content text-[17px] ${albert.className}`}>I would like to get notifications for this filter</span>
      </label>

      <button className="text-t_white dark:text-t_black bg-t_black dark:bg-t_white mx-auto w-min rounded-full px-24 py-2" onClick={handleSubmit}>SAVE</button>

    </WithCloseButton>
  )
}
