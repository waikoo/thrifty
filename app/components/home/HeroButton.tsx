import { usePathname } from 'next/navigation';
import Link from 'next/link';

import getLangAndGender from '@/utils/getLangAndGender';
import { albert } from '@/utils/fonts';
import { HeroState } from '@/types/home';

type HeroButtonProps = {
  state: HeroState
}

export default function HeroButton({ state }: HeroButtonProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const param = state === 'new_in' ? 'new+in' : 'promos'

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

