import { useHeroCarouselStore } from "@/state/uiState"

export default function useHeroCarousel(titles?: string[]) {
  const selectedCircle = useHeroCarouselStore((state) => state.selectedCircle)

  return {
    selectedCircle: selectedCircle,
    setSelectedCircle: useHeroCarouselStore((state) => state.setSelectedCircle),
    dynamicTitle: titles?.[selectedCircle]
  }
}
