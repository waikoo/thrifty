import { DELIVERY } from '@/app/components/data/orderSummary'
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
  addBrand: boolean
  addMaterial: boolean
  addOption: boolean
  statusBar: boolean
  isSaved: boolean
  maximizeNew: boolean
  maximizeEdited: boolean
  dynamicCategory: string
  toggleSelected: boolean
  draftLength: number
  editedLength: number
  productsLength: number
  showOptions: boolean
  onTop: string
  hasNoImage: boolean
  showImgError: boolean
  left: number
  right: number
  hideFilters: boolean
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
  showAddBrand: (value: boolean | (boolean)) => void
  showAddOption: (value: boolean | (boolean)) => void
  showAddMaterial: (value: boolean | (boolean)) => void
  raiseStatusBar: (value: boolean | (boolean)) => void
  setIsSaved: (value: boolean | (boolean)) => void
  setMaximizeNew: (value: boolean | (boolean)) => void
  setMaximizeEdited: (value: boolean | (boolean)) => void
  setDynamicCategory: (value: string) => void
  setToggleSelected: (value: boolean | (boolean)) => void
  setDraftLength: (value: number) => void
  setEditedLength: (value: number) => void
  setProductsLength: (value: number) => void
  setShowOptions: (value: boolean | (boolean)) => void
  setOnTop: (value: string) => void
  setHasNoImage: (value: boolean | (boolean)) => void
  setShowImgError: (value: boolean | (boolean)) => void
  setLeft: (value: number) => void
  setRight: (value: number) => void
  setHideFilters: (value: boolean | (boolean)) => void
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
  addBrand: false,
  addOption: false,
  addMaterial: false,
  statusBar: false,
  isSaved: false,
  maximizeNew: false,
  maximizeEdited: false,
  dynamicCategory: '',
  toggleSelected: false,
  draftLength: 0,
  editedLength: 0,
  productsLength: 0,
  showOptions: false,
  onTop: '',
  hasNoImage: true,
  showImgError: false,
  left: 0,
  right: 999,
  hideFilters: false,
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
  showAddBrand: (value) => set({ addBrand: value }),
  showAddOption: (value) => set({ addBrand: value }),
  showAddMaterial: (value) => set({ addMaterial: value }),
  raiseStatusBar: (value) => set({ statusBar: value }),
  setIsSaved: (value) => set({ isSaved: value }),
  setMaximizeNew: (value) => set({ maximizeNew: value }),
  setMaximizeEdited: (value) => set({ maximizeEdited: value }),
  setDynamicCategory: (value) => set({ dynamicCategory: value }),
  setToggleSelected: (value) => set({ toggleSelected: value }),
  setDraftLength: (value) => set({ draftLength: value }),
  setEditedLength: (value) => set({ editedLength: value }),
  setProductsLength: (value) => set({ editedLength: value }),
  setShowOptions: (value) => set({ showOptions: value }),
  setOnTop: (value) => set({ onTop: value }),
  setHasNoImage: (value) => set({ hasNoImage: value }),
  setShowImgError: (value) => set({ showImgError: value }),
  setLeft: (value) => set({ left: value }),
  setRight: (value) => set({ right: value }),
  setHideFilters: (value) => set({ hideFilters: value }),
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

type TFavoriteStore = {
  favorites: string[]
  toggleFavorite: (id: string) => void
  initFavorites: (favorites: string[]) => void
  favoritesLength: number
  addToFavorites: (id: string) => void
  addSelectedToFavorites: (newFavorites: string[]) => void
}

export const useFavoriteStore = create<TFavoriteStore>((set) => ({
  favorites: [],
  favoritesLength: 0,
  toggleFavorite: (id) => set((state) => {
    const newFavorites = state.favorites.includes(id)
      ? state.favorites.filter((item) => item !== id)
      : [...state.favorites, id];

    return {
      favorites: newFavorites,
      favoritesLength: newFavorites.length,
    };
  }),

  initFavorites: (favorites) => set({ favorites, favoritesLength: favorites.length }),
  addToFavorites: (id: string) => set((state) => {
    if (!state.favorites.includes(id)) {
      return {
        favorites: [...state.favorites, id],
        favoritesLength: state.favorites.length + 1
      };
    }
    return state;
  }),
  addSelectedToFavorites: (selected: string[]) => set((state) => {
    const newFav = selected.filter((newId) => !state.favorites.includes(newId));

    return {
      favorites: [...state.favorites, ...newFav],
      favoritesLength: state.favorites.length + newFav.length
    };
  }),
}))

type TCartStore = {
  cart: string[]
  addToCart: (id: string) => void
  initCart: (cart: string[]) => void
  cartLength: number
  cartTotalPrice: number
  setCartTotalPrice: (value: number) => void
  emptyCart: () => void
  removeFromCart: (id: string) => void
  removeSelectedFromCart: (selected: string[]) => void
}

export const useCartStore = create<TCartStore>((set) => ({
  cart: [],
  cartLength: 0,
  cartTotalPrice: 0,
  addToCart: (id) => set((state) => {
    if (state.cart.includes(id)) {
      return state
    }
    const newCart = [...state.cart, id];

    return {
      cart: newCart,
      cartLength: newCart.length,
    };
  }),

  initCart: (cart) => set({
    cart,
    cartLength: cart.length
  }),
  emptyCart: () => set({
    cart: [],
    cartLength: 0
  }),
  removeFromCart: (id: string) => set((state) => {
    const newCart = state.cart.filter((item) => item !== id);

    return {
      cart: newCart,
      cartLength: newCart.length,
    };
  }),
  removeSelectedFromCart: (selected: string[]) => set((state) => {
    const newCart: string[] = []

    selected.forEach((selectedId) => {
      state.cart.forEach((cartId) => {
        if (cartId !== selectedId) {
          newCart.push(cartId)
        }
      })
    })

    return {
      cart: [...newCart],
      cartLength: state.cart.length + newCart.length
    }
  }),
  setCartTotalPrice: (value: number) => set({ cartTotalPrice: value }),
}))

type TSelectedCartStore = {
  selected: string[]
  areAllSelected: boolean
  toggleAreAllSelected: () => void
  toggleSelected: (id: string) => void
  emptySelectedCart: () => void
  setAllSelectedCartItemsTo: (array: string[]) => void
}

export const useSelectedCartStore = create<TSelectedCartStore>((set) => ({
  selected: [],
  areAllSelected: false,
  toggleAreAllSelected: () => set((state) => ({
    areAllSelected: !state.areAllSelected
  })),
  setAllSelectedCartItemsTo: (array: string[]) => set({
    selected: array
  }),
  emptySelectedCart: () => set({ selected: [] }),
  toggleSelected: (id) => set((state) => ({
    selected: state.selected.includes(id)
      ? state.selected.filter((item) => item !== id)
      : [...state.selected, id],
  })),
}))

type TOrderStore = {
  shippingType: string
  isFreeDelivery: boolean
  setShippingType: (value: string) => void
  setIsFreeDelivery: (value: boolean) => void
}

export const useOrderStore = create<TOrderStore>((set) => ({
  shippingType: 'home',
  isFreeDelivery: false,
  setShippingType: (value) => set({ shippingType: value }),
  setIsFreeDelivery: (value) => set({ isFreeDelivery: value }),
}))

type TOrderSummaryStore = {
  shippingPrice: number
  setShippingPrice: (value: number) => void
  shippingText: string
  setShippingText: (value: string) => void
  totalWithShipping: number
  setTotalWithShipping: (value: number) => void
}

export const useOrderSummaryStore = create<TOrderSummaryStore>((set) => ({
  shippingPrice: DELIVERY.home,
  setShippingPrice: (value) => set({ shippingPrice: value }),
  shippingText: DELIVERY.home.toString(),
  setShippingText: (value) => set({ shippingText: value }),
  totalWithShipping: 0,
  setTotalWithShipping: (value) => set({ totalWithShipping: value }),
}))
