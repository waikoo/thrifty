import { useUIStore } from '@/state/uiState'
import { useUserStore } from '@/state/userState'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function useSignOut() {
  const signOut = useUserStore(state => state.signOut)
  const setShowMyAccount = useUIStore((state) => state.setShowMyAccount)
  const [loading, setLoading] = useState(false)

  const [pathname, router, params] = [usePathname(), useRouter(), useSearchParams()]

  const signOutHook = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    await signOut()
    setLoading(false)
    // setShow(false)
    setShowMyAccount(false)
    router.refresh()
    router.push(`${pathname}?category=${params.get('category') || 'women'}`)
  }
  return { signOutHook, loading }
}
