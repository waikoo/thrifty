import { useUserStore } from '@/state'

function useUserEmail() {
  const email = useUserStore(state => state.email)
  const setEmail = useUserStore(state => state.setEmail)

  return { email, setEmail }
}

export default useUserEmail
