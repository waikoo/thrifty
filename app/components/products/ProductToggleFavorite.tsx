"use client"
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import { useFavoriteStore } from "@/state/client/favoriteState";
import updateLocalStorage from "@/utils/updateLocalStorage";

type ProductToggleFavoriteType = {
  uuid: string
}
export default function ProductToggleFavorite({ uuid }: ProductToggleFavoriteType) {
  const { favorites, toggleFavorite } = useFavoriteStore()

  const handleToggleFavorite = (productUuid: string, favorites: string[]) => {
    toggleFavorite(uuid)
    updateLocalStorage(productUuid, favorites)
  }

  return (
    <div className="absolute right-0 top-0 cursor-pointer" onClick={() => handleToggleFavorite(uuid, favorites)}>
      {favorites.includes(uuid) ? (
        <IoMdHeart color="red" size="25" />
      ) : (
        <IoMdHeartEmpty color="black" size="25" />
      )}
    </div>
  )
}
