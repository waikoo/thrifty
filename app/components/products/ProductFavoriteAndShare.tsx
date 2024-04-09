"use client"
import { useEffect, useState } from "react";
import { BsShareFill } from "react-icons/bs";

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
    <div className="flex gap-6 self-start pl-20">
      <div className="bg-content border-grey cursor-pointer p-2" onClick={handleFavorite}>
        <IconHeart isFavorited={isFavorited} />
      </div>

      <div className="bg-content border-grey p-2">
        <BsShareFill className="" color="black" />
      </div>
    </div>
  )
}
