"use client"
import Link from "next/link"
import { useFavoritesOrCart } from "./hooks"

type FavoritesOrCartProps = {
  lang: string
}

export default function FavoritesOrCart({ lang }: FavoritesOrCartProps) {
  const { includesCart, includesFavorites, isFavorites, isCart } = useFavoritesOrCart()

  return (
    (includesCart || includesFavorites) ? (
      <div className="text-content mx-auto flex w-full max-w-[1500px] cursor-pointer gap-6 px-28 text-[1.125rem] font-medium tracking-wider">

        <Link href={`/${lang}/favorites`}
          className={`${isFavorites}`}>
          FAVORITES
        </Link>

        <Link href={`/${lang}/cart`}
          className={`${isCart}`}>
          CART
        </Link>
      </div>

    ) : null)

}
