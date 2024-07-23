import Link from 'next/link';

import { albert } from '@/utils/fonts';
import { Gender, Locales } from '@/types/link';
import { HeroState } from '@/types/home';

type HeroButtonProps = {
  gender: Gender
  lang: Locales
  heroState: HeroState
}

export default function HeroButton({ gender, lang, heroState }: HeroButtonProps) {
  const param = heroState === 'new_in' ? 'new+in' : 'promos'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}>
      <button
        className={`absolute left-0 right-0 bottom-[2.5rem] md:bottom-[5rem] bg-t_black text-t_white py-[0.5rem] md:py-[0.8rem] md:px-[1.5rem] whitespace-nowrap w-[138px] md:w-[180px] mx-auto rounded-full font-medium text-[0.8125rem] md:text-[1.125rem] xl:text-[1rem] tracking-widest ${albert.className}`}
      >
        SHOP NOW
      </button>
    </Link>
  )
}

