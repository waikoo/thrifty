"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { supabase } from '@/app/supabase'
import { TMouseOnButton, useUserStore } from '@/state/client/userState'
import { useUIStore } from '@/state/uiState'

export default function useSignIn() {
  const { setShowSignIn } = useUIStore()
  const { signIn } = useUserStore()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const fetchAdmin = async () => {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) console.error(sessionError)

    const { data, error } = await supabase
      .from('clients')
      .select('is_admin')
      .eq('client_id', sessionData.session?.user.id);
    if (error) console.error(error)
    return data?.[0]?.is_admin
  }

  const signInHook = async (e: TMouseOnButton) => {
    e.preventDefault()

    setLoading(true)
    const data = await signIn(e)
    const isAdmin = await fetchAdmin()
    setLoading(false)
    setShowSignIn(false)

    if (data?.role === 'authenticated' && isAdmin) {
      router.push('/en/admin')
    }
  }

  return { signInHook, loading }
}
