import { useUserStore } from '@/state/userState'

export default function useSignIn() {
  const user = useUserStore(state => state.user)

}
