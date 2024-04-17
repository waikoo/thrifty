import { useEffect, useState } from "react"

export default function usePosition(pathname: string) {
  const [position, setPosition] = useState('static')

  const handleScroll = () => {
    if (pathname.split('/').length < 4) { // is homepage
      setPosition(window.scrollY > 5 ? 'fixed' : 'static')
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

