import { HeroCarouselTitlesTuple } from "@/app/components/data/home"
import { useHeroCarouselStore } from "@/state/client/heroCarouselState"

export default function useHeroCarousel(titles?: HeroCarouselTitlesTuple) {
  const { selectedCircle } = useHeroCarouselStore()

  return {
    selectedCircle: selectedCircle,
    setSelectedCircle: useHeroCarouselStore((state) => state.setSelectedCircle),
    dynamicTitle: titles?.[selectedCircle]
  }
}
