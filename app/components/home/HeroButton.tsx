import Link from 'next/link';

import { albert } from '@/utils/fonts';
import { useHomeStore } from '@/state/client/homeState';
import { Gender, Locales } from '@/types/link';

type HeroButtonProps = {
  gender: Gender
  lang: Locales
}

export default function HeroButton({ gender, lang }: HeroButtonProps) {
  const { heroState } = useHomeStore()
  const param = heroState === 'new_in' ? 'new+in' : 'promos'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}>
      <button
        className={`absolute left-0 right-0 bottom-[5rem] bg-t_black text-t_white py-[0.5rem] md:py-[0.8rem] md:px-[1.5rem] whitespace-nowrap w-[138px] md:w-[180px] mx-auto rounded-full font-medium text-[0.8125rem] md:text-[1.125rem] tracking-widest ${albert.className}`}
      >
        SHOP NOW
      </button>
    </Link>
  )
}

