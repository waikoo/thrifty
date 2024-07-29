"use client"
import { useState } from "react";

import { useFavoriteStore } from "@/state/client/favoriteState";
import updateLocalStorage from "@/utils/updateLocalStorage";
import IconFavorite from "@/app/components/navigation/icons/IconFavorite";

type ProductToggleFavoriteType = {
  uuid: string
}

export default function ProductToggleFavorite({ uuid }: ProductToggleFavoriteType) {
  const { favorites, toggleFavorite } = useFavoriteStore()
  const [isHovered, setIsHovered] = useState(false)

  const handleToggleFavorite = (productUuid: string, favorites: string[]) => {
    toggleFavorite(uuid)
    updateLocalStorage(productUuid, favorites)
  }

  return (
    <div className="absolute top-[14px] right-[14px] grid place-items-center h-[25px] w-[25px]">
      <div className="cursor-pointer"
        onClick={() => handleToggleFavorite(uuid, favorites)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >

        {!isHovered && !favorites.includes(uuid) ? (
          <IconFavorite stroke="black" fill={false} />

        ) : isHovered && !favorites.includes(uuid) ? (
          <IconFavorite stroke="black" fill={false} width={'25'} />

        ) : isHovered && favorites.includes(uuid) ? (
          <IconFavorite stroke="black" fill={true} width={'25'} />

        ) : !isHovered && favorites.includes(uuid) ? (
          <IconFavorite stroke="black" fill={true} />
        ) : null}

      </div>
    </div>
  )
}
