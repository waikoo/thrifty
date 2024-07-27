"use client"
import { useEffect, useState } from "react";
import { FiShare2 } from "react-icons/fi";

import IconHeart from "@/app/components/products/icons/IconHeart"
import { ProductItemType } from "@/types/productItem";
import updateLocalStorage from "@/utils/updateLocalStorage";
import { useFavoriteStore } from "@/state/client/favoriteState";
import BigMustardButton from "../generic/BigMustardButton";

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
      <div onClick={handleFavorite}>
        <BigMustardButton className="p-[14px]">
          <IconHeart isFavorited={isFavorited} />
        </BigMustardButton>
      </div>

      <BigMustardButton className="p-[14px]">
        <FiShare2 color="black" />
      </BigMustardButton>
    </div>
  )
}
