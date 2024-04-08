import { create } from 'zustand'

type State = {
  maximizeNew: boolean
  maximizeEdited: boolean
  onTop: string
  setMaximizeNew: (value: boolean | (boolean)) => void
  setMaximizeEdited: (value: boolean | (boolean)) => void
  setOnTop: (value: string) => void
}

export const useNewAndEditedPositionStore = create<State>((set) => ({
  onTop: '',
  maximizeNew: false,
  maximizeEdited: false,
  setMaximizeNew: (value) => set({ maximizeNew: value }),
  setMaximizeEdited: (value) => set({ maximizeEdited: value }),
  setOnTop: (value) => set({ onTop: value }),
}))
