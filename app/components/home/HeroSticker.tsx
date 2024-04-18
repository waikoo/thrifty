import { HeroState } from '@/types/home';
import { getText } from '@/utils/home';

type HeroStickerProps = {
  state: HeroState
}

export default function HeroSticker({ state }: HeroStickerProps) {
  const newInOrSale = {
    bg: state === 'new_in' ? 'bg-t_yellow' : 'bg-t_red',
    text: state === 'new_in' ? 'text-t_black' : 'text-t_yellow',
  }

  return (
    <div className={`absolute top-20 left-5 ${newInOrSale.bg} ${newInOrSale.text} w-[100px] h-[100px] grid place-items-center rounded-full md:top-5 lg:w-[180px] lg:h-[180px] lg:top-10 lg:left-10`}>
      <span className="text-[1.5625rem] font-bold font-futura tracking-[1px] lg:text-[3.4375rem]">{getText(state)}</span>
    </div>
  )
}

