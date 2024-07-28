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
import { albert } from '@/utils/fonts';

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

      <HeroButton
        lang={lang as Locales}
        gender={gender as Gender}
        heroState={heroState}
        position="absolute"
        bgColor="bg-t_black"
        textColor="text-t_white"
        font={albert.className}
      />

    </section>
  )
}
