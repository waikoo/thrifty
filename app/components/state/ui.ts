import { create } from 'zustand'

type UIState = {
  showSignIn: boolean
  setShowSignIn: (value: boolean | ((prevState: boolean) => boolean)) => void
}

export const useUIStore = create<UIState>((set) => ({
  showSignIn: false,
  setShowSignIn: (value) => set(prevState => ({
    showSignIn: typeof value === 'function' ? value(prevState.showSignIn) : value
  })),
}))
