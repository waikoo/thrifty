import { zen_tokyo_zoo } from '@/utils/fonts';
import HeroTextSaleOffPercent from '@/app/components/home/HeroTextSaleOffPercent';

export default function HeroTextSale() {
  const upToPercentOff = 80

  return (
    <div className="w-full h-full grid place-items-center">
      <div className="relative text-center w-[20rem] h-[20rem]">
        <span className={`block ${zen_tokyo_zoo.className} absolute left-0 right-0 text-[1.5625rem] text-t_green text-shadow-ne shadow-black sm:text-[3.75rem] xl:text-[2.1875rem]`}>
          UP TO
        </span>

        <div className="absolute top-5 left-0 right-0">
          <HeroTextSaleOffPercent className="text-shadow-lg animate-bouncy shadow-t_green_blr">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="text-shadow-lg2 animate-bouncy shadow-t_green_blr">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="text-shadow-ne animate-bouncy shadow-t_green_hh">{upToPercentOff}</HeroTextSaleOffPercent>
        </div>

        <span className="absolute left-0 right-0 bottom-20 mx-auto text-[2.5rem] font-noir_pro text-t_green text-shadow-pr shadow-black sm:text-[6.875rem] xl:text-[3.75rem]">
          %
        </span>

        <span className={`${zen_tokyo_zoo.className} absolute bottom-0 block mx-auto text-[3rem] -rotate-17 text-t_green text-shadow-t_green sm:text-[7.5rem] xl:text-[4.125rem] left-0 right-0`}>
          OFF
        </span>
      </div>
    </div>
  )
}

