import Category from '@/app/components/navigation/Category'
import { create } from 'zustand'

type UIState = {
  showSignIn: boolean
  showMyAccount: boolean
  showRecovery: boolean
  showBanner: boolean
  showBackToTop: boolean
  isSecondColorPage: boolean
  showCategoryMenu: boolean
  category: Category['category'] | null
  showEditOptions: boolean
  popUp: boolean
  setCategory: (value: Category['category']) => void
  setShowSignIn: (value: boolean | (boolean)) => void
  setShowMyAccount: (value: boolean | (boolean)) => void
  setShowRecovery: (value: boolean | (boolean)) => void
  setShowBanner: (value: boolean | (boolean)) => void
  setShowBackToTop: (value: boolean | (boolean)) => void
  setIsSecondColorPage: (value: boolean | (boolean)) => void
  setShowCategoryMenu: (value: boolean | (boolean)) => void
  setShowEditOptions: (value: boolean | (boolean)) => void
  showPopUp: (value: boolean | (boolean)) => void
}

export const useUIStore = create<UIState>((set) => ({
  showSignIn: false,
  showMyAccount: false,
  showRecovery: false,
  showBanner: true,
  showBackToTop: false,
  isSecondColorPage: false,
  showCategoryMenu: false,
  category: null,
  showEditOptions: false,
  popUp: false,
  setCategory: (value) => set({ category: value }),
  setShowMyAccount: (value) => set({ showMyAccount: value }),
  setShowSignIn: (value) => set({ showSignIn: value }),
  setShowRecovery: (value) => set({ showRecovery: value }),
  setShowBanner: (value) => set({ showBanner: value }),
  setShowBackToTop: (value) => set({ showBackToTop: value }),
  setIsSecondColorPage: (value) => set({ isSecondColorPage: value }),
  setShowCategoryMenu: (value) => set({ showCategoryMenu: value }),
  setShowEditOptions: (value) => set({ showEditOptions: value }),
  showPopUp: (value) => set({ popUp: value }),
}))

type HeroCarouselState = {
  selectedCircle: number
  setSelectedCircle: (value: number) => void
}

export const useHeroCarouselStore = create<HeroCarouselState>((set) => ({
  selectedCircle: 0,
  setSelectedCircle: (value) => set({ selectedCircle: value }),
}))
