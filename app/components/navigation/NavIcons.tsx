"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import { useCartStore, useFavoriteStore } from "@/state/uiState"
import Number from "@/app/components/navigation/Number"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import getLangAndGender from "@/utils/getLangAndGender"
import Account from "@/app/components/navigation/Account"
import MiniCartView from "@/app/components/navigation/MiniCartView"

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { initCart, cartLength } = useCartStore()
  const { initFavorites, favoritesLength } = useFavoriteStore()
  const [showMiniCartView, setShowMiniCartView] = useState(false)
  const miniCartViewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    initCart(getFromLocalStorage('cart') || [])
    initFavorites(getFromLocalStorage('favorites') || [])
  }, [])

  return (
    <nav className={`relative flex items-center gap-6 pt-2 ${className}`}>
      <Account />

      <Link href={`/${lang}/${gender}/favorites`} className="relative">
        <IconFavorite />
        <Number itemLength={favoritesLength} />
      </Link>

      <Link href={`/${lang}/${gender}/cart`}
        className="relative"
        onMouseEnter={() => setShowMiniCartView(true)}
        onMouseOver={() => setShowMiniCartView(true)}
        onMouseDown={() => setShowMiniCartView(true)}
      >
        <IconShoppingBag />
        <Number itemLength={cartLength} />
      </Link>
      {showMiniCartView && <MiniCartView miniCartViewRef={miniCartViewRef} setShowMiniCartView={setShowMiniCartView} />}

    </nav>
  )
}
