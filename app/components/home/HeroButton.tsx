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
        className={`absolute left-0 right-0 bottom-10 bg-t_black text-t_white py-[0.6rem] w-[138px] mx-auto rounded-full font-medium text-[0.8125rem] ${albert.className}`}
      >
        SHOP NOW
      </button>
    </Link>
  )
}

