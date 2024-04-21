"use client"
import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import useViewport from '@/app/components/hooks/useViewport';
import HeroImage from '@/app/components/home/HeroImage';
import HeroSticker from '@/app/components/home/HeroSticker';
import HeroTextNewIn from '@/app/components/home/HeroTextNewIn';
import HeroTextSale from '@/app/components/home/HeroTextSale';
import HeroButton from '@/app/components/home/HeroButton';
import { usePathname } from 'next/navigation';
import getLangAndGender from '@/utils/getLangAndGender';
import { useHomeStore } from '@/state/client/homeState';
import { Gender, Locales } from '@/types/link';
import useHeroSwipe from '@/app/components/hooks/useHeroSwipe';
import { viewport } from '@/app/components/data/universalStyles';

export default function Hero() {
  const { lang, gender } = getLangAndGender(usePathname())
  const viewportWidth = useViewport()
  const { heroState } = useHomeStore()
  const logoColor = heroState === 'sale' && gender === 'kids' ? 'black' : 'white'
  const { touchStartHandler, touchEndHandler } = useHeroSwipe()

  return (
    <section
      className="w-full relative"
      onTouchStart={(e: React.TouchEvent) => touchStartHandler(e)}
      onTouchEnd={(e: React.TouchEvent) => touchEndHandler(e)}>
      <HeroImage gender={gender} state={heroState} />

      <HeroSticker />

      {viewportWidth < viewport.sm && (
        <div className="absolute top-6 left-0 right-0 h-9 mx-auto">
          <WithHome><Logo logoColor={logoColor} width="9.75rem" /> </WithHome>
        </div>
      )}

      {heroState === 'new_in' ? (<HeroTextNewIn />) : (<HeroTextSale />)}

      <HeroButton lang={lang as Locales} gender={gender as Gender} />

    </section>
  )
}
