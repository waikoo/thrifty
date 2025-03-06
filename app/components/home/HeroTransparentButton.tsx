"use client"
import { albert_600, albert_900 } from '@/utils/fonts';
import Link from 'next/link';
import getLangAndGender from '@/utils/getLangAndGender';
import { usePathname } from 'next/navigation';
import { HeroState } from '@/types/home';
import HeroNewInArrow from './HeroNewInArrow';

type HeroTransparentButtonProps = {
  heroState: HeroState
}

export default function HeroTransparentButton({ heroState }: HeroTransparentButtonProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const param = heroState === 'new_in' ? 'new+in' : 'promos'
  const position = heroState === 'new_in' ? 'mb-[-280px] ml-[150px] sm:mb-[-700px] sm:ml-[400px] xl:mb-0 xl:ml-0' : 'm-auto mb-[-320px] sm:mb-[-550px] xl:mb-[-450px]'
  const size = heroState === 'new_in' ? 'h-[117px] w-[117px] sm:h-[264px] sm:w-[264px] xl:h-[258px] xl:w-[258px]' : 'p-3 px-8'
  const rotate = heroState === 'new_in' ? '-ml-[5px] mt-[2px]' : 'rotate-[90deg]'

  return (
    <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
      className={`${position} inset-0 absolute z-90 grid place-items-center`}
    >
      <span className={`${size} relative  whitespace-nowrap rounded-full grid place-items-center text-t_yellow text-[14px] sm:text-[24px] xl:text-[21px] bg-[#000000]/30 ${albert_900.className} `}>
        <span className="shadow-[#2a3200] text-shadow-sm">
          SHOP NOW
        </span>

        <div className={` ${rotate} z-10 inset-0 absolute h-full flex items-center`}>
          <HeroNewInArrow className="hidden sm:block " />
        </div>
      </span>
    </Link>
  )
}

