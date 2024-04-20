"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconFavorite, IconShoppingBag } from '@/app/components/navigation/icons/'
import Number from "@/app/components/navigation/Number"
import Account from "@/app/components/navigation/Account"
import MiniCartView from "@/app/components/navigation/MiniCartView"
import getLangAndGender from "@/utils/getLangAndGender"
import { getFromLocalStorage } from "@/utils/getFromLocalStorage"
import MiniCartButtons from "@/app/components/navigation/MiniCartButtons"
import useUserSession from "@/app/components/hooks/useUserSession"
import { useNavigationStore } from "@/state/client/navigationState"
import { useFavoriteStore } from "@/state/client/favoriteState"
import { useCartStore } from "@/state/client/cartState"

type NavIconsProps = {
  className?: string
}

export default function NavIcons({ className }: NavIconsProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const { initCart, cartLength } = useCartStore()
  const { initFavorites, favoritesLength } = useFavoriteStore()
  const { showMiniCartView, setShowMiniCartView } = useNavigationStore()
  const { session, error } = useUserSession()
  const linkRef = useRef(null)
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    initCart(getFromLocalStorage('cart') || [])
    initFavorites(getFromLocalStorage('favorites') || [])
  }, [])


  const handleMouseMove = (e: React.MouseEvent) => {
    setLastMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const direction = getDirection(lastMousePosition, { x: e.clientX, y: e.clientY });

    if (direction === 'up' || direction === 'right' || direction === 'left') {
      setShowMiniCartView(false);
      return
    }
    setShowMiniCartView(true);
  };

  const getDirection = (from: { x: number, y: number }, to: { x: number, y: number }) => {
    if (to.y < from.y) return 'up';
    if (to.y > from.y) return 'down';
    if (to.x < from.x) return 'left';
    if (to.x > from.x) return 'right';
  };

  return (
    <nav className={`relative ${className}`}>
      <Account />

      <Link href={`/${lang}/${gender}/favorites`} className="relative" title="Favorites">
        <IconFavorite />
        {session && <Number itemLength={favoritesLength} />}
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
        {session && <Number itemLength={cartLength} />}
      </Link>

      {session && showMiniCartView && (
        <>
          <MiniCartView />
          <MiniCartButtons />
        </>
      )}
    </nav>
  )
}
