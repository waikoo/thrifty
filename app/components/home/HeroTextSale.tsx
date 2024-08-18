import { zen_tokyo_zoo } from '@/utils/fonts';
import HeroTextSaleOffPercent from './HeroTextSaleOffPercent';

export default function HeroTextSale() {
  const upToPercentOff = 80

  return (
    <div className="absolute top-[7rem] left-0 right-0 sm:top-[8rem] md:top-[14rem] xl:-right-[70rem] xl:top-[9rem]">
      <div className="relative text-center">
        <span className={`block ${zen_tokyo_zoo.className} relative text-[1.5625rem] top-[2.3rem] sm:top-[6rem] xl:top-[3rem] text-t_green text-shadow-ne shadow-black sm:text-[3.75rem] xl:text-[2.1875rem]`}>UP TO</span>

        <div className="relative">
          <HeroTextSaleOffPercent className="text-shadow-lg animate-bouncy shadow-t_green_blr">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="text-shadow-lg2 animate-bouncy shadow-t_green_blr">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="text-shadow-ne animate-bouncy shadow-t_green_hh">{upToPercentOff}</HeroTextSaleOffPercent>
        </div>

        <span className="absolute -bottom-[9rem] left-0 right-0 mx-auto text-[2.5rem] font-noir_pro text-t_green text-shadow-pr shadow-black sm:text-[6.875rem] xl:text-[3.75rem] sm:-bottom-[26rem] xl:-bottom-[15rem]">%</span>

        <span className={`${zen_tokyo_zoo.className} absolute block mx-auto top-[10.5rem] text-[3rem] -rotate-17 text-t_green text-shadow-t_green sm:text-[7.5rem] sm:top-[28rem] xl:text-[4.125rem] xl:top-[17rem] left-0 right-0`}>OFF</span>
      </div>
    </div>
  )
}

