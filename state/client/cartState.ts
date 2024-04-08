import { create } from 'zustand'

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
    cartLength: cart.length || 0
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


