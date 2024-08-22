"use client"
import { usePathname, useRouter } from 'next/navigation';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import HeroTextNewIn from '@/app/components/home/HeroTextNewIn';
import HeroTextSale from '@/app/components/home/HeroTextSale';
import HeroButton from '@/app/components/home/HeroButton';
import getLangAndGender from '@/utils/getLangAndGender';
import { Gender, Locales } from '@/types/link';
import { HeroState } from '@/types/home';
import { albert, albert_600 } from '@/utils/fonts';
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

      {heroState === 'new_in' ? (<HeroTextNewIn />) : (<HeroTextSale />)}

      <div className="absolute inset-0 w-1/2 ml-auto grid place-items-center" >
        <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}
        >
          <span className={`mr-[14rem] h-[135px] w-[135px] whitespace-nowrap rounded-full grid place-items-center text-white xl:text-[17px] backdrop-blur-md bg-[#2a233e]/20 border-[2px] border-[#b398ff20] ${albert_600.className}`}>
            SHOP NOW
          </span>
        </Link>
      </div>

    </section>
  )
}
