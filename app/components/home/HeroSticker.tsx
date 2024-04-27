"use client"
import { useHomeStore } from '@/state/client/homeState';
import { getText } from '@/utils/home';

export default function HeroSticker() {
  const { heroState } = useHomeStore()

  const newInOrSale = {
    bg: heroState === 'new_in' ? 'bg-t_yellow' : 'bg-t_red',
    text: heroState === 'new_in' ? 'text-t_black' : 'text-t_yellow',
  }

  return (
    <div className={`absolute top-[4.6rem] left-6 ${newInOrSale.bg} ${newInOrSale.text} w-[86px] h-[86px] grid place-items-center rounded-full md:left-[3rem] sm:w-[200px] sm:h-[200px] sm:top-[3.5rem] xl:w-[180px] xl:h-[180px] xl:top-10 xl:left-10 2xl:w-[250px] 2xl:h-[250px]`}>
      <span className="text-[1.3rem] sm:text-[3.9rem] font-bold font-futura tracking-tight lg:text-[3.4375rem] 2xl:text-[4rem]">{getText(heroState)}</span>
    </div>
  )
}

