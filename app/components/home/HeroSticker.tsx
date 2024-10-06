"use client"
import { HeroState } from '@/types/home';
import { getText } from '@/utils/home';

type HeroStickerProps = {
  heroState: HeroState
}

export default function HeroSticker({ heroState }: HeroStickerProps) {
  const newInOrSale = {
    bg: 'bg-t_yellow',
    text: 'text-t_black',
  }
  if (heroState === 'new_in') {
    return null
  } else {

    return (
      <div className={`absolute top-[4.6rem] left-6 ${newInOrSale.bg} ${newInOrSale.text} w-[86px] h-[86px] grid place-items-center rounded-full md:left-[3rem] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] sm:top-[3.5rem] xl:w-[180px] xl:h-[180px] xl:top-16 xl:left-16 2xl:w-[172px] 2xl:h-[172px]`}>
        <span className="text-[1.3rem] sm:text-[2.5rem] md:text-[3.9rem] font-bold font-futura tracking-tight lg:text-[3.4375rem] 2xl:text-[55px]">{getText(heroState)}</span>
      </div>
    )
  }

}
