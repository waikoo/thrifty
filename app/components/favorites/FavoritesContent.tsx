"use client"

import FavoritesItems from "@/app/components/favorites/FavoritesItems"
import EmptyFavorites from "@/app/components/favorites/EmptyFavorites"
import { useFavoriteStore } from "@/state/uiState"

export default function FavoritesContent() {
  const { favoritesLength } = useFavoriteStore()

  return favoritesLength < 1 ? <EmptyFavorites /> : <FavoritesItems />
}
