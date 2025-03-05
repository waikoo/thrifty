import HeroTextNewInSvg from './HeroTextNewInSvg'
import HeroTextNewInSvgMobile from './HeroTextNewInSvgMobile'
import HeroTextNewInSvgTablet from './HeroTextNewInSvgTablet'

export default function HeroTextNewIn() {

  return (
    <div className="z-[200] font-alokary text-[40px] leading-none text-white text-shadow shadow-black tracking-widest flex items-center h-full justify-end">

      <HeroTextNewInSvg className="hidden xl:block absolute right-0 mr-[-2px]" />

      <HeroTextNewInSvgTablet className="absolute inset-0 m-auto hidden sm:block xl:hidden" />

      <HeroTextNewInSvgMobile className="absolute inset-0 m-auto sm:hidden" />
    </div>
  )
}

