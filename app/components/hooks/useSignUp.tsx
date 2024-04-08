import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { useUIStore } from '@/state/client/uiState'
import { TMouseOnButton, useUserStore } from '@/state/client/userState'

export default function useSignUp() {
  const setShowSignIn = useUIStore((state) => state.setShowSignIn)
  const signUp = useUserStore(state => state.signUp)
  const [loading, setLoading] = useState(false)
  const [pathname, router, params] = [usePathname(), useRouter(), useSearchParams()]

  const signUpHook = async (e: TMouseOnButton) => {
    e.preventDefault()
    setLoading(true)
    const data = await signUp(e)
    setLoading(false)
    setShowSignIn(false)

    router.push(`${pathname}`)
  }
  return { signUpHook, loading }
}

