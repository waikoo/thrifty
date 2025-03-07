import { useEffect, useState } from "react"
import { supabase } from "@/app/supabase"

export default function useSupabaseGetSession() {
  const [isSession, setIsSession] = useState(false)

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession()
      setIsSession(Boolean(data.session))
    }

    fetchSession()

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsSession(Boolean(session))
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  return { isSession }
}

