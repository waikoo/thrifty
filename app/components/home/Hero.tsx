"use client"
import { usePathname, useRouter } from 'next/navigation';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import getLangAndGender from '@/utils/getLangAndGender';
import { HeroState } from '@/types/home';
import { albert_600 } from '@/utils/fonts';
import Link from 'next/link';

type HeroProps = {
  heroState: HeroState
  hasChanged: boolean
  setHasChanged: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Hero({ heroState, hasChanged, setHasChanged }: HeroProps) {
  const { lang, gender } = getLangAndGender(usePathname())
  const router = useRouter()
  const logoColor = heroState === 'sale' && gender === 'kids' ? 'black' : 'white'
  const param = heroState === 'new_in' ? 'new+in' : 'promos'
  const buttonBorderColor = heroState === 'new_in' ? 'border-[#b398ff20] ' : 'border-t_green'

  function handleClick(): void {
    if (!hasChanged) {
      router.push(`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`)
    }
    setHasChanged(false)
  }

  return (
    <section
      className="w-full relative cursor-pointer"
      onClick={handleClick}>
      <HeroImage gender={gender} state={heroState} />

      <HeroSticker heroState={heroState} />

      <div className="sm:hidden absolute top-6 left-0 right-0 h-9 mx-auto">
        <WithHome><Logo logoColor={logoColor} width="9.75rem" /> </WithHome>
      </div>


      <div className="ml-auto inset-0 absolute z-90 grid place-items-center w-1/3">
        <div className="mr-auto -ml-[4.5rem] grid items-center" >
          <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
          >
            <span className={`h-[135px] w-[135px] whitespace-nowrap rounded-full grid place-items-center text-white xl:text-[17px] backdrop-blur-md bg-[#2a233e]/20 ${buttonBorderColor} border-[2px] ${albert_600.className}`}>
              SHOP NOW
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
