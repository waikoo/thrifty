"use client"
import { albert_600, albert_900 } from '@/utils/fonts';
import Link from 'next/link';
import getLangAndGender from '@/utils/getLangAndGender';
import { usePathname } from 'next/navigation';
import { HeroState } from '@/types/home';
import HeroNewInArrow from './HeroNewInArrow';
import HeroNewInArrowMobile from './HeroNewInArrowMobile';

type HeroTransparentButtonProps = {
  heroState: HeroState
}

export default function HeroTransparentButton({ heroState }: HeroTransparentButtonProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const param = heroState === 'new_in' ? 'new+in' : 'promos'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
    >
      <span className={`relative h-[117px] w-[117px] sm:h-[264px] sm:w-[264px] xl:h-[258px] xl:w-[258px] whitespace-nowrap rounded-full grid place-items-center text-t_yellow text-[14px] sm:text-[24px] xl:text-[21px] bg-[#000000]/30 ${albert_900.className} `}>
        <span className="shadow-[#2a3200] text-shadow-sm">
          SHOP NOW
        </span>

        <div className="z-10 inset-0 -ml-[5px] mt-[2px] absolute h-full flex items-center">
          <HeroNewInArrow className="hidden sm:block " />
          <HeroNewInArrowMobile className="ml-[-15px] sm:hidden" />
        </div>
      </span>
    </Link>
  )
}

