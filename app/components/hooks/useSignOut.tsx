import { TMouseOnButton, useUserStore } from '@/state/userState'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function useSignOut(setShow: React.Dispatch<React.SetStateAction<boolean>>) {
  const signOut = useUserStore(state => state.signOut)
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()

  const signOutHook = async (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    await signOut()
    setLoading(false)
    setShow(false)
    router.refresh()
    router.push(`${pathname}?category=${params.get('category') || 'women'}`)
  }
  return { signOutHook, loading }
}
