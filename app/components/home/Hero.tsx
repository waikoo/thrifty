"use client"
import { usePathname, useRouter } from 'next/navigation';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import getLangAndGender from '@/utils/getLangAndGender';
import { HeroState } from '@/types/home';
import HeroTransparentButton from '@/app/components/home/HeroTransparentButton';
import useViewport from '../hooks/useViewport';
import { viewport } from '../data/universalStyles';

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
  const currentViewport = useViewport()

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


      {currentViewport > viewport.xl && (
        <div className="mr-auto xl:mr-0 xl:ml-auto inset-0 absolute z-90 grid place-items-center w-1/3">
          <div className="mt-[10rem] xl:mt-0 ml-[19rem] xl:mr-auto xl:-ml-[4.5rem] grid items-center" >
            <HeroTransparentButton heroState={heroState} />
          </div>
        </div>
      )}

      {currentViewport < viewport.xl && (
        <div className="absolute z-90 grid right-10 sm:right-20 md:right-0 bottom-12 place-items-center w-1/3">
          <div className="grid items-center" >
            <HeroTransparentButton heroState={heroState} />
          </div>
        </div>
      )}

    </section>
  )
}
