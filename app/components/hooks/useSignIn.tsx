import { supabase } from '@/app/supabase'
import { useUIStore } from '@/state'
import { TMouseOnButton, useUserStore } from '@/state/userState'
import { useState } from 'react'

export default function useSignIn() {
  const setShowSignIn = useUIStore((state) => state.setShowSignIn)
  const signIn = useUserStore(state => state.signIn)
  const [loading, setLoading] = useState(false)

  const signInHook = async (e: TMouseOnButton) => {
    e.preventDefault()
    setLoading(true)
    const data = await signIn(e)
    setLoading(false)
    console.log(data)
    setShowSignIn(false)
    if (data?.role === 'admin') {
      window.location.href = '/en/admin'

      supabase.auth.getUser().then(({ data: { user } }) => {
        console.log(user)
      })

    } else {
      console.error('Could not get user')
    }
  }

  return { signInHook, loading }
}
