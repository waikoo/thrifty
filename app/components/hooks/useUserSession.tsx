"use client"

import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

import { supabase } from "@/app/supabase";

export default function useUserSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState({
    message: "",
    status: false
  })
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error(error);
        setError({
          message: error.message,
          status: true
        })
      }
      setSession(data.session as Session);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT') {
          const expires = new Date(0).toUTCString();
          document.cookie = `my-access-token=;"+path=/; expires=${expires} ;SameSite=Lax; secure`
          document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`
        } else if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          const maxAge = 100 * 365 * 24 * 60 * 60 // 100 years, never expires
          document.cookie = `my-access-token=${session?.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          document.cookie = `my-refresh-token=${session?.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`
          setSession(null);
        }
      }
    )
    return () => listener.subscription.unsubscribe()
  }, []);

  useEffect(() => {
    const fetchAdmin = async () => {
      if (session?.user.id) {
        const { data, error } = await supabase
          .from('clients')
          .select('is_admin')
          .eq('client_id', session?.user.id);
        if (error) console.error(error)

        setIsAdmin(data?.[0]?.is_admin)
      }
    }

    fetchAdmin()
  }, [session?.user.id])

  return { session, isAdmin, error }
}
