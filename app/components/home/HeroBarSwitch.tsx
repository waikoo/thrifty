"use client"
import { useHomeStore } from "@/state/client/homeState"
import { useThemeStore } from "@/state/themeState"
import { getColor, getColor2 } from "@/utils/home"

export default function HeroBarSwitch() {
  const { heroState, setHeroState } = useHomeStore()
  const { theme } = useThemeStore()

  const handleStateChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement

    if (target.dataset.state === heroState) {
      return
    }

    setHeroState(heroState === 'new_in' ? 'sale' : 'new_in')
  }

  return (
    <div className="mx-auto mt-5 3xl:mt-12 grid place-items-center grid-cols-2 justify-center w-[100px]">
      <div className={`w-10 h-1 ${getColor(heroState, theme)} cursor-pointer`} data-state="new_in" onClick={handleStateChange}></div>
      <div className={`w-10 h-1 ${getColor2(heroState, theme)} cursor-pointer`} data-state="sale" onClick={handleStateChange}></div>
    </div>
  )
}

