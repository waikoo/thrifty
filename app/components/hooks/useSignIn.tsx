import { useUIStore } from '@/state'
import { TMouseOnButton, useUserStore } from '@/state/userState'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function useSignIn() {
  const setShowSignIn = useUIStore((state) => state.setShowSignIn)
  const signIn = useUserStore(state => state.signIn)
  const [loading, setLoading] = useState(false)
  const [pathname, router, params] = [usePathname(), useRouter(), useSearchParams()]

  const signInHook = async (e: TMouseOnButton) => {
    e.preventDefault()
    setLoading(true)
    const data = await signIn(e)
    setLoading(false)
    console.log(data)
    // setShow(false)
    setShowSignIn(false)
    if (data?.role === 'authenticated') {
      router.refresh()
      router.push(`${pathname}?category=${params.get('category') || 'women'}`)
      router.refresh()
    } else {
      console.error('Could not get user')
    }
    router.refresh()


  }
  return { signInHook, loading }
}
