"use client"
import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";

import IconHeart from "@/app/components/products/icons/IconHeart"
import { ProductItemType } from "@/types/productItem";
import updateLocalStorage from "@/utils/updateLocalStorage";
import { useFavoriteStore } from "@/state/client/favoriteState";

type ProductFavoriteAndShareProps = {
  matchedProduct: ProductItemType
}

export default function ProductFavoriteAndShare({ matchedProduct }: ProductFavoriteAndShareProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const { favorites, toggleFavorite, initFavorites } = useFavoriteStore()

  const handleFavorite = () => {
    const productUuid = matchedProduct.uuid
    toggleFavorite(productUuid)
    updateLocalStorage(productUuid, favorites)
  }

  useEffect(() => {
    const favoritesLocal = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (favoritesLocal.length > 0) {
      initFavorites(favoritesLocal)
    }
  }, [])

  useEffect(() => {
    const favoritesLocal = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(matchedProduct.uuid) || favoritesLocal.includes(matchedProduct.uuid)) {
      setIsFavorited(true)
    } else {
      setIsFavorited(false)
    }
  }, [favorites])

  return (
    <div className="flex gap-2 self-start">
      <div className="bg-t_mustard hover:bg-[#C9CC2C] border-none cursor-pointer rounded-full sm:p-3 p-2 h-auto w-auto" onClick={handleFavorite}>
        <IconHeart isFavorited={isFavorited} />
      </div>

      <div className="bg-t_mustard hover:bg-[#C9CC2C] cursor-pointer border-grey sm:p-3 p-2 rounded-full">
        <FiShare2 color="black" />
      </div>
    </div>
  )
}
