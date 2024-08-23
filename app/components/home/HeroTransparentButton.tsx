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
  const buttonBorderColor = heroState === 'new_in' ? 'border-[#b398ff20] ' : 'border-t_green'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
    >
      <span className={`h-[90px] w-[90px] md:h-[150px] md:w-[150px] xl:h-[135px] xl:w-[135px] whitespace-nowrap rounded-full grid place-items-center text-white text-[13px] xl:text-[17px] backdrop-blur-md bg-[#2a233e]/20 ${buttonBorderColor} border-[2px] ${albert_600.className}`}>
        SHOP NOW
      </span>
    </Link>
  )
}

