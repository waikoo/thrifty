import { zen_tokyo_zoo } from '@/utils/fonts';

export default function HeroTextSale() {

  return (
    <div className="absolute top-[7rem] left-0 right-0 sm:top-[8rem] md:top-[6rem] lg:-right-[53rem] lg:top-[14rem]">
      <div className="relative text-center">
        <span className={`block ${zen_tokyo_zoo.className} text-[1.5625rem] -mb-12 text-t_green text-shadow-ne shadow-black sm:text-[3.75rem] lg:text-[2.1875rem]`}>UP TO</span>

        <span className="text-[6.875rem] left-0 right-0 mx-auto text-center font-avant_garde text-shadow-nm shadow-t_green sm:text-[18.75rem] lg:text-[11.25rem] absolute"> 80 </span>
        <span className="text-[6.875rem] left-0 right-0 mx-auto text-center font-avant_garde text-shadow-lg shadow-t_green sm:text-[18.75rem] lg:text-[11.25rem] absolute"> 80 </span>
        <span className="absolute -bottom-[6rem] left-0 right-0 mx-auto text-[2.5rem] font-noir_pro text-t_green text-shadow-pr shadow-black sm:text-[6.875rem] lg:text-[3.75rem] sm:-bottom-[22rem] lg:-bottom-[12rem]">%</span>

        <span className={`${zen_tokyo_zoo.className} absolute block mx-auto left-0 right-0 top-[8rem] text-[3rem] -rotate-17 text-t_green text-shadow-ne shadow-black sm:text-[7.5rem] sm:top-[24rem] lg:text-[3.125rem] lg:top-[14rem]`}>OFF</span>
      </div>
    </div>
  )
}

