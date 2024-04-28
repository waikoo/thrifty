import { supabase } from "@/app/supabase"
import { TSavedFilters } from "@/types/filters"
import { useEffect, useState } from "react"

export default function useFiltersInSearchBar() {
  const [savedFilters, setSavedFilters] = useState<TSavedFilters[] | []>([])

  useEffect(() => {
    const getSavedFilters = async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('saved_filters')

      if (error) console.error(error)
      return data
    }

    getSavedFilters().then((savedFilters) => {
      if (savedFilters) {
        setSavedFilters(savedFilters?.[0]?.saved_filters)
      }
    })
  }, [])

  return { savedFilters }
}

