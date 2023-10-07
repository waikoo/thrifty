import { TMouseOnButton, useUserStore } from '@/state/userState'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function useSignIn(setShow: React.Dispatch<React.SetStateAction<boolean>>) {
  const signIn = useUserStore(state => state.signIn)
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()

  const signInHook = async (e: TMouseOnButton) => {
    e.preventDefault()
    setLoading(true)
    const data = await signIn(e)
    setLoading(false)
    console.log(data)
    setShow(false)
    if (data?.role === 'authenticated') {
      router.refresh()
      router.push(`${pathname}?category=${params.get('category') || 'women'}`)
    } else {
      console.error('Could not get user')
    }


  }
  return { signInHook, loading }
}
