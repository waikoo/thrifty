"use client"
import { useState } from "react"

import Link from "next/link"

import { useFavoritesOrCart } from "@/app/components/hooks"
import { IconFavorite, IconShoppingBag } from "@/app/components/navigation/icons"
import { useThemeStore } from "@/state/themeState"
import { albert_700 } from "@/utils/fonts"
import { useCartStore } from "@/state/client/cartState"
import { useFavoriteStore } from "@/state/client/favoriteState"

type FavoritesOrCartProps = {
  lang: string
  gender: string
}

export default function FavoritesOrCart({ lang, gender }: FavoritesOrCartProps) {
  const [isFavoritesHovered, setIsFavoritesHovered] = useState(false)
  const [isCartHovered, setIsCartHovered] = useState(false)
  const { theme } = useThemeStore()
  const { getColor, isOnCart, isOnFavorites } = useFavoritesOrCart(theme)
  const { cartLength } = useCartStore()
  const { favoritesLength } = useFavoriteStore()

  return (
    (isOnCart || isOnFavorites) ? (
      <div className={`bg-[#fff] text-t_black rounded-t-[35px] justify-content grid w-full cursor-pointer grid-cols-2 pt-6 text-[1.125rem] ${albert_700.className} tracking-wider`}>

        <Link href={`/${lang}/${gender}/cart`}
          className={`${getColor('border', isCartHovered, isOnCart)} flex items-center justify-center gap-2 border-b-[3px] pb-3`}
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        >
          <IconShoppingBag stroke={getColor('icon', isCartHovered, isOnCart)} />
          <span className={`text-[0.875rem] ${getColor('text', isCartHovered, isOnCart)}`}>
            CART {`(${cartLength})`}
          </span>
        </Link>

        <Link href={`/${lang}/${gender}/favorites`}
          className={`${getColor('border', isFavoritesHovered, isOnFavorites)} flex items-center justify-center gap-2 border-b-[3px] pb-3`}
          onMouseEnter={() => setIsFavoritesHovered(true)}
          onMouseLeave={() => setIsFavoritesHovered(false)}
        >
          <IconFavorite stroke={getColor('icon', isFavoritesHovered, isOnFavorites)} />
          <span className={`text-[0.875rem] ${getColor('text', isFavoritesHovered, isOnFavorites)}`}>
            FAVORITES {`(${favoritesLength})`}
          </span>
        </Link>
      </div>

    ) : null)

}
