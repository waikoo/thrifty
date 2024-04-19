import { useHomeStore } from "@/state/client/homeState"
import { useState } from "react"

export default function useHeroSwipe() {
  const [startX, setStartX] = useState(0)
  const [endX, setEndX] = useState(0)
  const { heroState, setHeroState } = useHomeStore()

  function touchStartHandler(e: React.TouchEvent): void {
    setStartX(e.touches[0].clientX)
  }

  function touchEndHandler(e: React.TouchEvent): void {
    setEndX(e.changedTouches[0].clientX)
    handleSwipeDirection()
  }

  function handleSwipeDirection() {
    const swipeDistance = endX - startX

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        if (heroState === 'sale') {
          return
        } else {
          setHeroState('sale')
        }
      } else {
        if (heroState === 'new_in') {
          return
        } else {
          setHeroState('new_in')
        }
      }
    }
  }
  return {
    touchStartHandler,
    touchEndHandler,
  }
}

