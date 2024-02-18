import { DELIVERY } from '@/app/components/data/orderSummary'
import Category from '@/app/components/navigation/Category'
import { supabase } from '@/app/supabase'
import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

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
  removeFromFavorites: (id: string) => void
  removeSelectedFromFavorites: (selected: string[]) => void
  emptyFavorites: () => void
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
  removeFromFavorites: (id: string) => set((state) => {
    if (state.favorites.includes(id)) {
      return {
        favorites: state.favorites.filter((item) => item !== id),
        favoritesLength: state.favorites.length - 1
      };
    }
    return state;
  }),
  removeSelectedFromFavorites: (selected: string[]) => set((state) => {
    const newFavorites: string[] = []

    selected.forEach((selectedId) => {
      state.favorites.forEach((favoriteId) => {
        if (favoriteId !== selectedId) {
          newFavorites.push(favoriteId)
        }
      })
    })

    return {
      favorites: [...newFavorites],
      favoritesLength: state.favorites.length + newFavorites.length
    }

  }),
  emptyFavorites: () => set({
    favorites: [],
    favoritesLength: 0
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
  addSelectedFavoritesToCart: (selected: string[]) => void
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
      // cartLength: state.cart.length + newCart.length
      cartLength: newCart.length
    }
  }),
  setCartTotalPrice: (value: number) => set({ cartTotalPrice: value }),
  addSelectedFavoritesToCart: (selected: string[]) => set((state) => {
    const newCart = selected.filter((newId) => !state.cart.includes(newId));

    return {
      cart: [...state.cart, ...newCart],
      cartLength: state.cart.length + newCart.length
    }
  })
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


type TSelectedFavoritesStore = {
  selectedFavorites: string[]
  areAllFavoritesSelected: boolean
  toggleAreAllFavoritesSelected: () => void
  toggleSelectedFavorites: (id: string) => void
  emptySelectedFavorites: () => void
  setAllSelectedFavoritesItemsTo: (array: string[]) => void
  // addSelectedToCart: () => void
}

export const useSelectedFavoritesStore = create<TSelectedFavoritesStore>((set) => ({
  selectedFavorites: [],
  areAllFavoritesSelected: false,
  toggleAreAllFavoritesSelected: () => set((state) => ({
    areAllFavoritesSelected: !state.areAllFavoritesSelected
  })),
  setAllSelectedFavoritesItemsTo: (array: string[]) => set({
    selectedFavorites: array
  }),
  emptySelectedFavorites: () => set({ selectedFavorites: [] }),
  toggleSelectedFavorites: (id) => set((state) => ({
    selectedFavorites: state.selectedFavorites.includes(id)
      ? state.selectedFavorites.filter((item) => item !== id)
      : [...state.selectedFavorites, id],
  })),
  // addSelectedToCart: (cart) => set((state) => ({
  //   
  // }))
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


type TCheckoutStore = {
  isContactOpen: boolean
  setIsContactOpen: (value: boolean) => void
  isShippingOpen: boolean
  setIsShippingOpen: (value: boolean) => void
  isPaymentOpen: boolean
  setIsPaymentOpen: (value: boolean) => void
  firstName: string
  setFirstName: (value: string) => void
  lastName: string
  setLastName: (value: string) => void
  phone: string
  setPhone: (value: string) => void
  email: string
  setEmail: (value: string) => void
  address: string
  setAddress: (value: string) => void
  city: string
  setCity: (value: string) => void
  country: string
  setCountry: (value: string) => void
  zipcode: string
  setZipcode: (value: string) => void
  paymentType: string
  setPaymentType: (value: string) => void
  isCartOpen: boolean
  setIsCartOpen: (value: boolean) => void
  isContactHidden: boolean
  setIsContactHidden: (value: boolean) => void
  isShippingHidden: boolean
  setIsShippingHidden: (value: boolean) => void
  isPaymentHidden: boolean
  setIsPaymentHidden: (value: boolean) => void
  isContactErrorFree: boolean
  setIsContactErrorFree: (value: boolean) => void
  isShippingErrorFree: boolean
  setIsShippingErrorFree: (value: boolean) => void
  isPaymentErrorFree: boolean
  setIsPaymentErrorFree: (value: boolean) => void
}

export const useCheckoutStore = create<TCheckoutStore>((set) => ({
  isContactOpen: true,
  setIsContactOpen: (value) => set({ isContactOpen: value }),
  isShippingOpen: true,
  setIsShippingOpen: (value) => set({ isShippingOpen: value }),
  isPaymentOpen: true,
  setIsPaymentOpen: (value) => set({ isPaymentOpen: value }),
  firstName: '',
  setFirstName: (value) => set({ firstName: value }),
  lastName: '',
  setLastName: (value) => set({ lastName: value }),
  phone: '',
  setPhone: (value) => set({ phone: value }),
  email: '',
  setEmail: (value) => set({ email: value }),
  address: '',
  setAddress: (value) => set({ address: value }),
  city: '',
  setCity: (value) => set({ city: value }),
  country: '',
  setCountry: (value) => set({ country: value }),
  zipcode: '',
  setZipcode: (value) => set({ zipcode: value }),
  paymentType: '',
  setPaymentType: (value) => set({ paymentType: value }),
  isCartOpen: false,
  setIsCartOpen: (value) => set({ isCartOpen: value }),
  isContactHidden: false,
  setIsContactHidden: (value) => set({ isContactHidden: value }),
  isShippingHidden: true,
  setIsShippingHidden: (value) => set({ isShippingHidden: value }),
  isPaymentHidden: true,
  setIsPaymentHidden: (value) => set({ isPaymentHidden: value }),
  isContactErrorFree: true,
  setIsContactErrorFree: (value) => set({ isContactErrorFree: value }),
  isShippingErrorFree: true,
  setIsShippingErrorFree: (value) => set({ isShippingErrorFree: value }),
  isPaymentErrorFree: false,
  setIsPaymentErrorFree: (value) => set({ isPaymentErrorFree: value }),
}))

export type TAddress = {
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  zipcode: string,
  country: string,
  phone: number,
  isDefault: boolean,
  userId: string,
  addressId: string
}

type TAddressStore = {
  showAddAddress: boolean
  setShowAddAddress: (value: boolean) => void
  savedAddresses: TAddress[]
  firstName: string,
  setFirstName: (value: string) => void,
  lastName: string,
  setLastName: (value: string) => void,
  address: string,
  setAddress: (value: string) => void,
  city: string,
  setCity: (value: string) => void,
  country: string,
  setCountry: (value: string) => void,
  zipcode: string,
  setZipcode: (value: string) => void,
  phone: number,
  setPhone: (value: number) => void,
  isDefault: boolean
  setIsDefault: (value: boolean) => void
  setAsDefault: (addressId: string, userId: string) => void
  deleteAddress: (addressId: string, userId: string) => void
  showEditForm: boolean
  setShowEditForm: (value: boolean) => void
  onSubmitAddress: (addressBeingEdited: string) => Promise<void>
}

export const useAddressStore = create<TAddressStore>((set, get) => ({
  showAddAddress: false,
  setShowAddAddress: (value) => set({ showAddAddress: value }),
  savedAddresses: [],
  firstName: '',
  setFirstName: (value) => set({ firstName: value }),
  lastName: '',
  setLastName: (value) => set({ lastName: value }),
  address: '',
  setAddress: (value) => set({ address: value }),
  city: '',
  setCity: (value) => set({ city: value }),
  country: '',
  setCountry: (value) => set({ country: value }),
  zipcode: '',
  setZipcode: (value) => set({ zipcode: value }),
  phone: 0,
  setPhone: (value) => set({ phone: value }),
  isDefault: false,
  setIsDefault: (value) => set({ isDefault: value }),
  onSubmitAddress: async (addressBeingEdited: string) => {

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const newAddress: TAddress = {
        firstName: get().firstName,
        lastName: get().lastName,
        address: get().address,
        city: get().city,
        zipcode: get().zipcode,
        country: get().country,
        phone: get().phone,
        isDefault: get().isDefault,
        userId: user.id,
        addressId: addressBeingEdited || uuidv4()
      }

      let { data: dbAddresses, error } = await supabase
        .from('clients')
        .select('addresses')
        .eq('client_id', user.id);

      if (dbAddresses && dbAddresses.length > 0) {
        const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
        const existingAddress = flattenedAddresses.find((address) => address.addressId === newAddress.addressId);

        if (existingAddress) { // Check if existing address is being updated
          const updateProperties = ["firstName", "lastName", "address", "city", "zipcode", "country", "phone", "isDefault"];

          for (const property of updateProperties) { // Overwrite existing address with new values
            if (newAddress[property] !== existingAddress[property]) {
              existingAddress[property] = newAddress[property];
            }
          }
          flattenedAddresses[flattenedAddresses.indexOf(existingAddress)] = existingAddress;

          const { data: updateData, error: updateError } = await supabase
            .from('clients')
            .update({ addresses: flattenedAddresses })
            .eq('client_id', user.id);
          if (updateError) console.error(updateError);

        } else { // Append new address to existing addresses
          const { data, error } = await supabase
            .from('clients')
            .update({ addresses: [...flattenedAddresses, newAddress] })
            .eq('client_id', user.id);
          if (error) console.error(error);
        }
      } else {
        const { data: updateData, error: updateError } = await supabase
          .from('clients')
          .insert({
            client_id: user.id,
            addresses: [newAddress],
            email: user.email,
          });
        if (error) console.error(error);
      }
    }

    // Reset values
    set({ firstName: '', lastName: '', address: '', city: '', zipcode: '', country: '', phone: 0, isDefault: false })
    set({ showAddAddress: false })
    set({ showEditForm: false })
  },
  setAsDefault: async (addressId, userId) => {
    const { data: dbAddresses, error: dbError } = await supabase
      .from('clients')
      .select('addresses')
    if (dbError) console.error(dbError);
    const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
    const mappedAddresses = flattenedAddresses.map((address) => {
      address.isDefault = address.addressId === addressId ? true : false
      return address
    })
    const { data: updateData, error: updateError } = await supabase
      .from('clients')
      .update({ addresses: mappedAddresses })
      .eq('client_id', userId)
    if (updateError) console.error(updateError);

  },
  deleteAddress: async (addressId, userId) => {
    const { data: dbAddresses, error: dbError } = await supabase
      .from('clients')
      .select('addresses')
    if (dbError) console.error(dbError);
    const flattenedAddresses = dbAddresses?.flatMap((clientObj) => clientObj.addresses) ?? [];
    const filteredAddresses = flattenedAddresses.filter((address) => address.addressId !== addressId)

    const { data: updateData, error: updateError } = await supabase
      .from('clients')
      .update({ addresses: filteredAddresses })
      .eq('client_id', userId)
    if (updateError) console.error(updateError);
  },
  showEditForm: false,
  setShowEditForm: (value) => set({ showEditForm: value }),
}))
