"use client"
import { useThemeStore } from "@/state/themeState"
import { HeroState } from "@/types/home"
import { getColor, getColor2 } from "@/utils/home"

type HeroBarSwitchProps = {
  carouselState: HeroState
  setCarouselState: React.Dispatch<React.SetStateAction<HeroState>>
}

export default function HeroBarSwitch({ carouselState, setCarouselState }: HeroBarSwitchProps) {
  const { theme } = useThemeStore()

  return (
    <div className="mx-auto mt-5 3xl:mt-12 grid place-items-center grid-cols-2 justify-center w-[100px]">
      <div
        className={`w-14 h-4 cursor-pointer flex items-center justify-center p-2`}
        data-state="new_in"
        onClick={() => setCarouselState('new_in')}>
        <div className={`w-10 h-1 ${getColor(carouselState, theme)}`}></div>
      </div>

      <div
        className={`w-14 h-4 cursor-pointer flex items-center justify-center p-2`}
        data-state="sale"
        onClick={() => setCarouselState('sale')}>
        <div
          className={`w-10 h-1 ${getColor2(carouselState, theme)}`}
        ></div>
      </div>
    </div>
  )
}

