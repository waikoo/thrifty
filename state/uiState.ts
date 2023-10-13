import { create } from 'zustand'

type UIState = {
  showSignIn: boolean
  showMyAccount: boolean
  showRecovery: boolean
  setShowSignIn: (value: boolean | (boolean)) => void
  setShowMyAccount: (value: boolean | (boolean)) => void
  setShowRecovery: (value: boolean | (boolean)) => void
}

export const useUIStore = create<UIState>((set) => ({
  showSignIn: false,
  showMyAccount: false,
  showRecovery: false,
  setShowMyAccount: (value) => set({ showMyAccount: value }),
  setShowSignIn: (value) => set({ showSignIn: value }),
  setShowRecovery: (value) => set({ showRecovery: value })
}))

type HeroCarouselState = {
  selectedCircle: number
  setSelectedCircle: (value: number) => void
}

export const useHeroCarouselStore = create<HeroCarouselState>((set) => ({
  selectedCircle: 0,
  setSelectedCircle: (value) => set({ selectedCircle: value }),
}))
