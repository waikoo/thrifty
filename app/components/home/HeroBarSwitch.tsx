"use client"
import { useHomeStore } from "@/state/client/homeState"

export default function HeroBarSwitch() {
  const { heroState, setHeroState } = useHomeStore()

  const handleStateChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement

    if (target.dataset.state === heroState) {
      return
    }

    setHeroState(heroState === 'new_in' ? 'sale' : 'new_in')
  }

  const barStyle = {
    one: heroState === 'new_in' ? 'bg-t_black' : 'bg-gray-300',
    two: heroState !== 'new_in' ? 'bg-t_black' : 'bg-gray-300',
  }

  return (
    <div className="mx-auto mt-3 grid place-items-center grid-cols-2 justify-center w-[100px]">
      <div className={`w-10 h-1 ${barStyle.one} cursor-pointer`} data-state="new_in" onClick={handleStateChange}></div>
      <div className={`w-10 h-1 ${barStyle.two} cursor-pointer`} data-state="sale" onClick={handleStateChange}></div>
    </div>
  )
}

