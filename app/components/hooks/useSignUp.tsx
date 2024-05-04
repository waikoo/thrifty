"use client"
import { useState } from 'react'

import { useUIStore } from '@/state/client/uiState'
import { TMouseOnButton, useUserStore } from '@/state/client/userState'

export default function useSignUp() {
  const { setShowSignIn, setShowSignUpConfirmation } = useUIStore()
  const { signUp } = useUserStore()
  const [loading, setLoading] = useState(false)

  const signUpHook = async (e: TMouseOnButton) => {
    e.preventDefault()
    setLoading(true)
    await signUp(e)
    setLoading(false)
    setShowSignIn(false)

    setShowSignUpConfirmation(true)
    setTimeout(() => setShowSignUpConfirmation(false), 3000)
  }
  return { signUpHook, loading }
}

