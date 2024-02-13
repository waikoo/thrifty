"use client"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconAccount, IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import { useCartStore, useFavoriteStore } from "@/state/uiState"
import Number from "@/app/components/navigation/Number"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import getLangAndGender from "@/utils/getLangAndGender"

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { initCart, cartLength } = useCartStore()
  const { initFavorites, favoritesLength } = useFavoriteStore()

  useEffect(() => {
    initCart(getFromLocalStorage('cart'))
    initFavorites(getFromLocalStorage('favorites'))
  }, [])

  return (
    <nav className={`flex items-center gap-6 pt-2 ${className}`}>
      <IconAccount />

      <Link href={`/${lang}/${gender}/favorites`} className="relative">
        <IconFavorite />
        <Number itemLength={favoritesLength} />
      </Link>

      <Link href={`/${lang}/${gender}/cart`} className="relative">
        <IconShoppingBag />
        <Number itemLength={cartLength} />
      </Link>
    </nav>
  )
}
