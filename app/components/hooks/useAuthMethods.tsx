import { useUserStore } from '@/state'

function useAuthMethods() {
  const signIn = useUserStore(state => state.signIn)
  const signUp = useUserStore(state => state.signUp)

  return { signIn, signUp }
}

export default useAuthMethods
