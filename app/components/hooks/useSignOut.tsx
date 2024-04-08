import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { useUIStore } from '@/state/client/uiState'
import { useUserStore } from '@/state/client/userState'

export default function useSignOut() {
  const { signOut } = useUserStore()
  const { setShowMyAccount } = useUIStore()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const signOutHook = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    await signOut()
    setLoading(false)
    setShowMyAccount(false)
    router.refresh()
  }
  return { signOutHook, loading }
}
