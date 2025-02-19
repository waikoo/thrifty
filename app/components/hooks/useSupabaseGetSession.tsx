import { useEffect, useState } from "react"
import { supabase } from "@/app/supabase"

export default function useSupabaseGetSession() {
  const [isSession, setIsSession] = useState(false)

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) setIsSession(true)
    }
    fetchSession()
  }, [])

  return {
    isSession
  }
}

