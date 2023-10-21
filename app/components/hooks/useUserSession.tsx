import { supabase } from "@/app/supabase";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

export default function useUserSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState({
    message: "",
    status: false
  })

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
        setError({
          message: error.message,
          status: true
        })
      } else {
        setSession(data.session);
      }
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
      }
    )
    return () => listener.subscription.unsubscribe()
  }, []);

  return { session, error }
}
