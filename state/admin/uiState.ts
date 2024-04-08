import { create } from 'zustand'

type State = {
  toggleSelected: boolean
  showOptions: boolean
  setToggleSelected: (value: boolean | (boolean)) => void
  setShowOptions: (value: boolean | (boolean)) => void
}

export const useUIStore = create<State>((set) => ({
  toggleSelected: false,
  showOptions: false,
  setToggleSelected: (value) => set({ toggleSelected: value }),
  setShowOptions: (value) => set({ showOptions: value }),
}))
