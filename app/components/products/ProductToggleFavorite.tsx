"use client"
import { useState } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

import { useFavoriteStore } from "@/state/client/favoriteState";
import updateLocalStorage from "@/utils/updateLocalStorage";

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
    <div className="absolute top-4 right-4 grid place-items-center h-[25px] w-[25px]">
      <div className="cursor-pointer"
        onClick={() => handleToggleFavorite(uuid, favorites)}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >

        {!isHovered && !favorites.includes(uuid) ? (
          <HiOutlineHeart color="#484848" size="20" />
        ) : isHovered && !favorites.includes(uuid) ? (
          <IoMdHeartEmpty color="#484848" size="25" />
        ) : isHovered && favorites.includes(uuid) ? (
          <IoMdHeart color="#3e3e3e" size="25" />
        ) : !isHovered && favorites.includes(uuid) ? (
          <HiHeart color="#484848" size="20" />
        ) : null}

      </div>
    </div>
  )
}
