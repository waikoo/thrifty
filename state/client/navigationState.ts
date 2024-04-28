import { create } from 'zustand'

type TNavigation = {
  showMiniCartView: boolean,
  setShowMiniCartView: (value: boolean) => void,
  showMobileSearch: boolean,
  setShowMobileSearch: (value: boolean) => void
}

export const useNavigationStore = create<TNavigation>((set) => ({
  showMiniCartView: false,
  setShowMiniCartView: (value) => set({ showMiniCartView: value }),
  showMobileSearch: false,
  setShowMobileSearch: (value) => set({ showMobileSearch: value })
}))
