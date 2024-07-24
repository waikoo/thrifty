"use client"
import { usePathname } from 'next/navigation'

import { albert_500, albert_700 } from '@/utils/fonts'

export default function useFavoritesOrCart(theme: 'light' | 'dark') {
  const isOnCartOrFavorites = usePathname().split('/').at(-1)

  const isOnCart = isOnCartOrFavorites === 'cart'
  const isOnFavorites = isOnCartOrFavorites === 'favorites'

  const inactiveColor = "#c2c2c2"
  const hoverColor = "#9d9d9d"

  function getColor(type: 'icon' | 'text' | 'border', isHovered: boolean, isOn: boolean) {
    if (isHovered && isOn || isOn) {
      if (type === 'icon') return theme === 'light' ? 'black' : 'white'
      if (type === 'text') return `text-t_black ${albert_700.className}`
      if (type === 'border') return 'border-t_black'
    }

    if (!isOn && isHovered) {
      if (type === 'icon') return hoverColor
      if (type === 'text') return `text-[${hoverColor}] ${albert_500.className}`
      if (type === 'border') return `border-[${hoverColor}]`
    }

    if (!isOn) {
      if (type === 'icon') return inactiveColor
      if (type === 'text') return `text-[${inactiveColor}] ${albert_500.className}`
      if (type === 'border') return `border-[${inactiveColor}]`
    }
  }

  return {
    isOnCart,
    isOnFavorites,
    getColor
  }
}
