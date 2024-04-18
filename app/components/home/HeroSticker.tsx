"use client"
import { HeroState } from '@/types/home';
import getLangAndGender from '@/utils/getLangAndGender';
import { getText } from '@/utils/home';
import { usePathname } from 'next/navigation';

type HeroStickerProps = {
  state: HeroState
}

export default function HeroSticker({ state }: HeroStickerProps) {
  const gender = getLangAndGender(usePathname())
  const newInOrSale = {
    bg: state === 'new_in' ? 'bg-t_yellow' : 'bg-t_red',
    text: state === 'new_in' ? 'text-t_black' : 'text-t_yellow',
  }
  const onWomenNewIn = state === 'new_in' && gender === 'women' ? '' : ''
  const onMenNewIn = state === 'new_in' && gender === 'women' ? '' : ''
  const onKidsNewIn = state === 'new_in' && gender === 'women' ? '' : ''

  return (
    <div className={`absolute top-14 left-6 ${newInOrSale.bg} ${newInOrSale.text} w-[86px] h-[86px] grid place-items-center rounded-full md:top-5 lg:w-[180px] lg:h-[180px] lg:top-10 lg:left-10`}>
      <span className="text-[1.3rem] font-bold font-futura tracking-[1px] lg:text-[3.4375rem]">{getText(state)}</span>
    </div>
  )
}

