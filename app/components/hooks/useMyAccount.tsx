import { useUIStore } from "@/state"


export default function useMyAccount() {

  return {
    showMyAccount: useUIStore((state) => state.showMyAccount),
    setShowMyAccount: useUIStore((state) => state.setShowMyAccount)
  }
}
