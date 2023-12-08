import { useEffect, useState } from "react"
import { supabase } from "@/app/supabase"
import { useUIStore } from "@/state"

export default function useStatusBarLength() {
  const { isSaved } = useUIStore()

  const [draftCount, setDraftCount] = useState(0)

  useEffect(() => {
    const fetchDrafts = async () => {
      const { data, error } = await supabase.from('draft').select('*');
      if (error) console.log(error)

      setDraftCount(data?.length as number)
    }
    fetchDrafts()
  }, [isSaved])

  return draftCount
}
