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

export default function Hero() {
  const { lang, gender } = getLangAndGender(usePathname())
  const viewportWidth = useViewport()
  const { heroState, setHeroState } = useHomeStore()
  const logoColor = heroState === 'sale' && gender === 'kids' ? 'black' : 'white'
  const { touchStartHandler, touchEndHandler } = useHeroSwipe()

  return (
    <section
      className="w-full relative"
      onTouchStart={(e: React.TouchEvent) => touchStartHandler(e)}
      onTouchEnd={(e: React.TouchEvent) => touchEndHandler(e)}>
      <HeroImage />

      <HeroSticker />

      {viewportWidth < 1024 && (
        <div className="absolute top-6 left-0 right-0">
          <WithHome><Logo logoColor={logoColor} /> </WithHome>
        </div>
      )}

      {heroState === 'new_in' ? (<HeroTextNewIn />) : (<HeroTextSale />)}

      <HeroButton lang={lang as Locales} gender={gender as Gender} />

    </section>
  )
}
