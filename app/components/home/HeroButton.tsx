import Link from 'next/link';

import { Gender, Locales } from '@/types/link';
import { HeroState } from '@/types/home';
import { albert_700 } from '@/utils/fonts';

type HeroButtonProps = {
  gender: Gender
  lang: Locales
  heroState: HeroState
  position: string
  bgColor: string
  textColor: string
  font: string
}

export default function HeroButton({ gender, lang, heroState, position, bgColor, textColor, font }: HeroButtonProps) {
  const param = heroState === 'new_in' ? 'new+in' : 'promos'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}>
      <button
        className={`${position} ${bgColor} ${textColor} ${font} left-0 right-0 bottom-[2.5rem] md:bottom-[5rem] py-[0.5rem] md:py-[0.8rem] xl:py-2 md:px-[1.5rem] whitespace-nowrap w-[138px] md:w-[180px] xl:w-[150px] mx-auto rounded-full font-medium text-[0.8125rem] md:text-[1.125rem] xl:text-[13px] ${albert_700.className} tracking-widest hover:bg-[#C9CC2C]`}
      >
        SHOP NOW
      </button>
    </Link>
  )
}

