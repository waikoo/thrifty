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
  addOption: boolean
  statusBar: boolean
  isSaved: boolean
  // areAllExpanded: boolean
  // isExpanded: boolean
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
  showAddOption: (value: boolean | (boolean)) => void
  raiseStatusBar: (value: boolean | (boolean)) => void
  setIsSaved: (value: boolean | (boolean)) => void
  // setAreAllExpanded: (value: boolean | (boolean)) => void
  // setIsExpanded: (value: boolean | (boolean)) => void
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
  addOption: false,
  statusBar: false,
  isSaved: false,
  // areAllExpanded: false,
  // isExpanded: false,
  setCategory: (value) => set({ category: value }),
  setShowMyAccount: (value) => set({ showMyAccount: value }),
  setShowSignIn: (value) => set({ showSignIn: value }),
  setShowRecovery: (value) => set({ showRecovery: value }),
  setShowBanner: (value) => set({ showBanner: value }),
  setShowBackToTop: (value) => set({ showBackToTop: value }),
  setIsSecondColorPage: (value) => set({ isSecondColorPage: value }),
  setShowCategoryMenu: (value) => set({ showCategoryMenu: value }),
  setShowEditOptions: (value) => set({ showEditOptions: value }),
  showPopUp: (value) => set((state) => ({ ...state, popUp: value })),
  // showPopUp: (value) => set({ popUp: value }),
  showAddOption: (value) => set({ addOption: value }),
  raiseStatusBar: (value) => set({ statusBar: value }),
  setIsSaved: (value) => set({ isSaved: value }),
  // setAreAllExpanded: (value) => set({ areAllExpanded: value }),
  // setIsExpanded: (value) => set({ isExpanded: value }),
}))

type HeroCarouselState = {
  selectedCircle: number
  setSelectedCircle: (value: number) => void
}

export const useHeroCarouselStore = create<HeroCarouselState>((set) => ({
  selectedCircle: 0,
  setSelectedCircle: (value) => set({ selectedCircle: value }),
}))

type TFilterTitleState = {
  allComponents: string[],
  expandedComponents: string[]
  areAllExpanded: boolean
  setAllComponents: (componentId: string) => void
  setExpandedComponent: (componentId: string) => void
  unsetExpandedComponent: (componentId: string) => void
  expandAllComponents: () => void
  collapseAllComponents: () => void
}

export const useFilterTitleStore = create<TFilterTitleState>((set) => ({
  allComponents: ['CATEGORY', 'SHOP BY', 'PRODUCT TYPE', 'COLOR', 'BRAND', 'CONDITION', 'MATERIAL', 'SIZE', 'DATE ADDED'],
  expandedComponents: [],
  areAllExpanded: false,
  setAllComponents: (componentId) => set((state) => ({
    allComponents: [...state.allComponents, componentId],
  })),
  setExpandedComponent: (componentId) => set((state) => {
    const expandedComponents = [...state.expandedComponents, componentId]
    const areAllExpanded = state.allComponents.every(id => expandedComponents.includes(id))
    return {
      expandedComponents,
      areAllExpanded
    }
  }),
  unsetExpandedComponent: (componentId) => set((state) => {
    const expandedComponents = state.expandedComponents.filter(id => id !== componentId)
    const areAllExpanded = state.allComponents.every(id => expandedComponents.includes(id))
    return {
      expandedComponents,
      areAllExpanded
    }
  }),
  expandAllComponents: () => set((state) => ({
    expandedComponents: state.allComponents,
    areAllExpanded: true
  })),
  collapseAllComponents: () => set({
    expandedComponents: [],
    areAllExpanded: false
  }),
}));

