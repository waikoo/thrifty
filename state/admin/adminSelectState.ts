import { ProductItemType } from '@/types/productItem'
import { create } from 'zustand'

type State = {
  selectedItems: string[],
  toggleItem: (id: string) => void,
  selectAll: (draft: ProductItemType[]) => void,
  deselectAll: () => void
}

export const useDraftStore = create<State>((set) => ({
  selectedItems: [],
  toggleItem: (id) => set((state) => ({
    selectedItems: state.selectedItems.includes(id)
      ? state.selectedItems.filter((item) => item !== id)
      : [...state.selectedItems, id]
  })),
  selectAll: (draft) => set(() => ({
    selectedItems: draft.map((item) => item.uuid)
  })),
  deselectAll: () => set(() => ({ selectedItems: [] })),
}))

export const useEditedStore = create<State>((set) => ({
  selectedItems: [],
  toggleItem: (id) => set((state) => ({
    selectedItems: state.selectedItems.includes(id)
      ? state.selectedItems.filter((item) => item !== id)
      : [...state.selectedItems, id]
  })),
  selectAll: (edited) => set(() => ({
    selectedItems: edited.map((item) => item.uuid)
  })),
  deselectAll: () => set(() => ({ selectedItems: [] })),
}))

