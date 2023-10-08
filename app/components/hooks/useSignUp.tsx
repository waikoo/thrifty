import { useUIStore } from '@/state'
import { TMouseOnButton, useUserStore } from '@/state/userState'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

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
    console.log(data)
    // setShow(false)
    setShowSignIn(false)

    router.push(`${pathname}?category=${params.get('category') || 'women'}`)
  }
  return { signUpHook, loading }
}

