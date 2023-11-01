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
        if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
          const expires = new Date(0).toUTCString();
          document.cookie = `my-access-token=;"+path=/; expires=${expires} ;SameSite=Lax; secure`
          document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
          document.cookie = `my-access-token=${session?.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          document.cookie = `my-refresh-token=${session?.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          setSession(null);
        }
        // setSession(session)
      }
    )
    return () => listener.subscription.unsubscribe()
  }, []);

  return { session, error }
}
