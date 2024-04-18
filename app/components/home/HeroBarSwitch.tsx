import { HeroState } from "@/types/home"

type HeroBarSwitchProps = {
  handleStateChange: (e: React.MouseEvent) => void
  state: HeroState
}

export default function HeroBarSwitch({ handleStateChange, state }: HeroBarSwitchProps) {
  const barStyle = {
    one: state === 'new_in' ? 'bg-t_black' : 'bg-t_white',
    two: state !== 'new_in' ? 'bg-t_black' : 'bg-t_white',
  }

  return (
    <div className="absolute left-0 right-0 bottom-6 mx-auto grid place-items-center grid-cols-2 justify-center w-[100px]">
      <div className={`w-10 h-1 ${barStyle.one} cursor-pointer`} data-state="new_in" onClick={handleStateChange}></div>
      <div className={`w-10 h-1 ${barStyle.two} cursor-pointer`} data-state="sale" onClick={handleStateChange}></div>
    </div>
  )
}

