import { create } from 'zustand'

type State = {
  statusBar: boolean
  raiseStatusBar: (value: boolean | (boolean)) => void

  draftLength: number
  setDraftLength: (value: number) => void

  editedLength: number
  setEditedLength: (value: number) => void

  productsLength: number
  setProductsLength: (value: number) => void
}

export const useStatusBarStore = create<State>((set) => ({
  draftLength: 0,
  setDraftLength: (value) => set({ draftLength: value }),

  editedLength: 0,
  setEditedLength: (value) => set({ editedLength: value }),

  statusBar: false,
  raiseStatusBar: (value) => set({ statusBar: value }),

  productsLength: 0,
  setProductsLength: (value) => set({ productsLength: value }),
}))
