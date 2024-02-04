"use client"
import Link from "next/link"
import { useFavoritesOrCart } from "@/app/components/hooks"
import { IconFavorite, IconShoppingBag } from "@/app/components/navigation/icons"
import { useThemeStore } from "@/state/themeState"

type FavoritesOrCartProps = {
  lang: string
  gender: string
}

export default function FavoritesOrCart({ lang, gender }: FavoritesOrCartProps) {
  const { includesCart, includesFavorites, isFavorites, isCart } = useFavoritesOrCart()
  const { theme } = useThemeStore()

  const getIconColor = (theme: 'light' | 'dark', includes: boolean) => {
    if (!includes) {
      return "grey"
    }
    return theme === "light" ? "black" : "white"
  }

  return (
    (includesCart || includesFavorites) ? (
      <div className="text-content justify-content grid w-screen cursor-pointer grid-cols-2 pt-6 text-[1.125rem] font-medium tracking-wider">

        <Link href={`/${lang}/${gender}/cart`}
          className={`${isCart} flex items-center justify-center gap-2 border-b-[3px] pb-3`}>
          <IconShoppingBag stroke={getIconColor(theme, includesCart)} />
          <span className="text-[0.875rem] font-bold">CART</span>
        </Link>

        <Link href={`/${lang}/${gender}/favorites`}
          className={`${isFavorites} flex items-center justify-center gap-2 border-b-[3px] pb-3`}>
          <IconFavorite stroke={getIconColor(theme, includesFavorites)} showFavorites={false} />
          <span className="text-[0.875rem] font-bold">FAVORITES</span>
        </Link>
      </div>

    ) : null)

}
