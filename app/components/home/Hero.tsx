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

export default function Hero() {
  const { gender } = getLangAndGender(usePathname())
  const viewportWidth = useViewport()
  const { heroState } = useHomeStore()
  const logoColor = heroState === 'sale' && gender === 'kids' ? 'black' : 'white'

  return (
    <section className="w-full relative">
      <HeroImage />

      <HeroSticker />

      {viewportWidth < 1024 && (
        <div className="absolute top-6 left-0 right-0">
          <WithHome><Logo logoColor={logoColor} /> </WithHome>
        </div>
      )}

      {heroState === 'new_in' ? (<HeroTextNewIn />) : (<HeroTextSale />)}

      <HeroButton />

    </section>
  )
}

