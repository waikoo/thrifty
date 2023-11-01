import { useUIStore } from '@/state/uiState'
import { useUserStore } from '@/state/userState'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function useSignOut() {
  const signOut = useUserStore(state => state.signOut)
  const setShowMyAccount = useUIStore((state) => state.setShowMyAccount)
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
