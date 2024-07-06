import { useHomeStore } from "@/state/client/homeState";
import { useEffect, useState } from "react";

export default function useHeroSwipe() {
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const { heroState, setHeroState } = useHomeStore();

  function touchStartHandler(e: React.TouchEvent): void {
    setStartX(e.touches[0].clientX);
  }

  function touchEndHandler(e: React.TouchEvent): void {
    setEndX(e.changedTouches[0].clientX);
  }

  function handleSwipeDirection() {
    const swipeDistance = endX - startX;

    if (Math.abs(swipeDistance) > 15) {
      if (swipeDistance > 0) {
        setHeroState("new_in");
      } else {
        setHeroState("sale");
      }
    }
  }

  useEffect(() => {
    setStartX(0);
    setEndX(0);
  }, [heroState]);

  return {
    touchStartHandler,
    touchEndHandler,
    handleSwipeDirection
  };
}
