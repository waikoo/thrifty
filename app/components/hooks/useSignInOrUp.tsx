import { useUIStore } from "@/state/uiState";


export default function useSignInOrUp() {
  return {
    showSignIn: useUIStore((state) => state.showSignIn),
    setShowSignIn: useUIStore((state) => state.setShowSignIn)
  }
}
