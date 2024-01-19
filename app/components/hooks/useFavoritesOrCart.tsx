import { usePathname } from 'next/navigation'

export default function useFavoritesOrCart() {
  const splitPath = usePathname().split('/')

  const includesCart = splitPath.includes('cart')
  const includesFavorites = splitPath.includes('favorites')

  function getClassName(condition: boolean) {
    return condition ? 'text-content border-content' : 'text-grey border-grey font-light'
  }

  return {
    includesCart,
    includesFavorites,
    isFavorites: getClassName(includesFavorites),
    isCart: getClassName(includesCart)
  }
}
