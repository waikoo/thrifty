import { create } from 'zustand'

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

type TSelectedFavoritesStore = {
  selectedFavorites: string[]
  areAllFavoritesSelected: boolean
  toggleAreAllFavoritesSelected: () => void
  toggleSelectedFavorites: (id: string) => void
  emptySelectedFavorites: () => void
  setAllSelectedFavoritesItemsTo: (array: string[]) => void
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
}))
