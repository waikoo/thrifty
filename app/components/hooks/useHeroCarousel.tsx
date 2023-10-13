import { useHeroCarouselStore } from "@/state/uiState"
import { HeroCarouselTitlesTuple } from "../data/home"

export default function useHeroCarousel(titles?: HeroCarouselTitlesTuple) {
  const selectedCircle = useHeroCarouselStore((state) => state.selectedCircle)

  return {
    selectedCircle: selectedCircle,
    setSelectedCircle: useHeroCarouselStore((state) => state.setSelectedCircle),
    dynamicTitle: titles?.[selectedCircle]
  }
}
