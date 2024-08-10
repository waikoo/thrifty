import { create } from 'zustand'

type UIState = {
  showSignIn: boolean
  setShowSignIn: (value: boolean | (boolean)) => void

  showMyAccount: boolean
  setShowMyAccount: (value: boolean | (boolean)) => void

  showRecovery: boolean
  setShowRecovery: (value: boolean | (boolean)) => void

  showBanner: boolean
  setShowBanner: (value: boolean | (boolean)) => void

  showBackToTop: boolean
  setShowBackToTop: (value: boolean | (boolean)) => void

  isSecondColorPage: boolean
  setIsSecondColorPage: (value: boolean | (boolean)) => void

  showPasswordConfirmation: boolean
  setShowPasswordConfirmation: (value: boolean) => void

  showSignUpConfirmation: boolean
  setShowSignUpConfirmation: (value: boolean) => void

  showShare: boolean
  setShowShare: (value: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  showSignIn: false,
  setShowSignIn: (value) => set({ showSignIn: value }),

  showMyAccount: false,
  setShowMyAccount: (value) => set({ showMyAccount: value }),

  showRecovery: false,
  setShowRecovery: (value) => set({ showRecovery: value }),

  showBanner: true,
  setShowBanner: (value) => set({ showBanner: value }),

  showBackToTop: false,
  setShowBackToTop: (value) => set({ showBackToTop: value }),

  isSecondColorPage: false,
  setIsSecondColorPage: (value) => set({ isSecondColorPage: value }),

  showPasswordConfirmation: false,
  setShowPasswordConfirmation: (value) => set({ showPasswordConfirmation: value }),

  showSignUpConfirmation: false,
  setShowSignUpConfirmation: (value) => set({ showSignUpConfirmation: value }),

  showShare: false,
  setShowShare: (value) => set({ showShare: value }),
}))
