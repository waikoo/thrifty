import { create } from "zustand";

type TcolorCarouselState = {
  containerRef: HTMLDivElement | null
  setContainerRef: (value: HTMLDivElement | null) => void
}

export const useColorCarouselRef = create<TcolorCarouselState>((set) => ({
  containerRef: null,
  setContainerRef: (value) => set({ containerRef: value }),
}))
