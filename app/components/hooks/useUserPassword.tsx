import { useUserStore } from "@/state"

export default function useUserPassword() {
  const password = useUserStore((state) => state.password)
  const setPassword = useUserStore((state) => state.setPassword)

  return { password, setPassword }
}
