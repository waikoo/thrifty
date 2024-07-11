import { useEffect, useState } from "react"

export default function usePosition(pathname: string) {
  const [position, setPosition] = useState('static')

  const handleScroll = () => {
    const isHomePage = pathname.split('/').length < 4
    const isProductsPage = pathname.split('/')[3] === 'products'

    if (isHomePage || isProductsPage) {
      const amount = isHomePage ? 5 : 300
      setPosition(window.scrollY > amount ? 'fixed' : 'static')
    } else {
      return
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return position
}

