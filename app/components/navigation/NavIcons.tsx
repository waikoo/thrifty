"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import Number from "@/app/components/navigation/Number"
import Account from "@/app/components/navigation/Account"
import getLangAndGender from "@/utils/getLangAndGender"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import { useNavigationStore } from "@/state/client/navigationState"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { useCartStore } from "@/state/client/cartState"
import useMouseLeave from "../hooks/useMouseLeave"

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { initCart, cartLength } = useCartStore()
  const { initFavorites, favoritesLength } = useFavoriteStore()
  const { showMiniCartView, setShowMiniCartView } = useNavigationStore()
  const linkRef = useRef(null)
  const { handleMouseMove, getDirection, lastMousePosition } = useMouseLeave()

  useEffect(() => {
    initCart(getFromLocalStorage('cart') || [])
    initFavorites(getFromLocalStorage('favorites') || [])
  }, [])

  const handleMouseLeave = (e: React.MouseEvent) => {
    const direction = getDirection(lastMousePosition, { x: e.clientX, y: e.clientY });

    if (direction === 'up' || direction === 'right' || direction === 'left') {
      setShowMiniCartView(false);
      return
    }
    setShowMiniCartView(true);
  };

  return (
    <nav className={`relative ${className}`}>
      <Account testid="desktop-account" />

      <Link href={`/${lang}/${gender}/favorites`} className="relative" title="Favorites">
        <IconFavorite />
        <Number itemLength={favoritesLength} />
      </Link>

      <Link href={`/${lang}/${gender}/cart`}
        className="relative"
        onMouseEnter={() => setShowMiniCartView(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        title="Cart"
        ref={linkRef}
      >
        <IconShoppingBag />
        <Number itemLength={cartLength} />
      </Link>
    </nav>
  )
}
