"use client"
import { usePathname, useRouter } from 'next/navigation';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import getLangAndGender from '@/utils/getLangAndGender';
import { HeroState } from '@/types/home';
import HeroTransparentButton from '@/app/components/home/HeroTransparentButton';

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
  const borderRadius = 'rounded-[1.5rem] md:rounded-[2.5rem] xl:rounded-[1.8rem]'

  function handleClick(): void {
    if (!hasChanged) {
      router.push(`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`)
    }
    setHasChanged(false)
  }

  return (
    <section
      className={`w-full relative cursor-pointer isolate ${borderRadius}`}
      onClick={handleClick}>
      <HeroImage gender={gender} state={heroState} />

      {heroState === 'new_in' && <HeroSticker heroState={heroState} />}

      <div className="sm:hidden absolute top-[3rem] left-0 right-0 h-9 mx-auto">
        <WithHome><Logo logoColor={logoColor} width="9.75rem" /></WithHome>
      </div>

      <HeroTransparentButton heroState={heroState} />
    </section>
  )
}
