import { avant_garde_bold, zen_tokyo_zoo } from '@/utils/fonts';
import HeroTextSaleOffPercent from '@/app/components/home/HeroTextSaleOffPercent';

type HeroTextSaleProps = {
  className?: string
}

export default function HeroTextSale({ className }: HeroTextSaleProps) {
  const upToPercentOff = 80

  return (
    <div className={`${className} w-full h-full grid place-items-center`}>
      <div className="relative text-center w-1/2 h-1/2 xl:w-[20rem] xl:h-[20rem] sm:mt-[-70px]">
        <span className={`block ${avant_garde_bold.className} absolute left-0 right-0 text-[1.5625rem] text-white sm:text-[3.75rem] xl:text-[2.1875rem] text-shadow-upto shadow-black/50 `}>
          UP TO
        </span>

        <div className="absolute top-5 left-0 right-0">
          <HeroTextSaleOffPercent className="animate-bouncy">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="animate-bouncy">{upToPercentOff}</HeroTextSaleOffPercent>
          <HeroTextSaleOffPercent className="animate-bouncy">{upToPercentOff}</HeroTextSaleOffPercent>
        </div>

        <span className="absolute left-0 right-0 top-[7rem] sm:top-[13rem] xl:top-[11rem] bottom-16 xl:bottom-20 mx-auto text-[2.5rem] font-noir_pro text-[#e8e500] text-shadow-upto shadow-black/50 sm:text-[5rem] xl:text-[3.75rem]">
          %
        </span>

        <span className={`${avant_garde_bold.className} absolute top-[10rem] sm:top-[19rem] xl:top-[16rem] xl:bottom-0 block mx-auto text-[3rem] -rotate-17 text-white sm:text-[5.5rem] xl:text-[4.125rem] left-0 right-0 text-shadow-upto shadow-black/50`}>
          OFF
        </span>
      </div>
    </div>
  )
}

