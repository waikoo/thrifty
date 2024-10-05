"use client"
import { albert_600 } from '@/utils/fonts';
import Link from 'next/link';
import getLangAndGender from '@/utils/getLangAndGender';
import { usePathname } from 'next/navigation';
import { HeroState } from '@/types/home';

type HeroTransparentButtonProps = {
  heroState: HeroState
}

export default function HeroTransparentButton({ heroState }: HeroTransparentButtonProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const param = heroState === 'new_in' ? 'new+in' : 'promos'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
    >
      <span className={`h-[90px] w-[90px] md:h-[150px] md:w-[150px] xl:h-[258px] xl:w-[258px] whitespace-nowrap rounded-full grid place-items-center text-t_yellow text-[13px] xl:text-[21px] bg-[#000000]/30 ${albert_600.className} shadow-[#2a3200] shadow-sm`}>
        SHOP NOW
      </span>
    </Link>
  )
}

