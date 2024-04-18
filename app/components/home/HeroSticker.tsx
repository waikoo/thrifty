"use client"
import { useHomeStore } from '@/state/client/homeState';
import { HeroState } from '@/types/home';
import getLangAndGender from '@/utils/getLangAndGender';
import { getText } from '@/utils/home';
import { usePathname } from 'next/navigation';

export default function HeroSticker() {
  const { heroState } = useHomeStore()
  const { gender } = getLangAndGender(usePathname())
  const newInOrSale = {
    bg: heroState === 'new_in' ? 'bg-t_yellow' : 'bg-t_red',
    text: heroState === 'new_in' ? 'text-t_black' : 'text-t_yellow',
  }
  const onWomenNewIn = heroState === 'new_in' && gender === 'women' ? '' : ''
  const onMenNewIn = heroState === 'new_in' && gender === 'women' ? '' : ''
  const onKidsNewIn = heroState === 'new_in' && gender === 'women' ? '' : ''

  return (
    <div className={`absolute top-14 left-6 ${newInOrSale.bg} ${newInOrSale.text} w-[86px] h-[86px] grid place-items-center rounded-full md:top-5 lg:w-[180px] lg:h-[180px] lg:top-10 lg:left-10`}>
      <span className="text-[1.3rem] font-bold font-futura tracking-[1px] lg:text-[3.4375rem]">{getText(heroState)}</span>
    </div>
  )
}

