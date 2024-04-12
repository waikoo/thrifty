import { create } from 'zustand'
import { Gender } from '@/types/link'

type State = {
  showGenderMenu: boolean
  setShowGenderMenu: (value: boolean | (boolean)) => void

  gender: Gender | null
  setGender: (value: Gender) => void
}

export const useGenderStore = create<State>((set) => ({
  showGenderMenu: false,
  setShowGenderMenu: (value) => set({ showGenderMenu: value }),

  gender: null,
  setGender: (value) => set({ gender: value }),
}))
