"use client"
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import getLangAndGender from '@/utils/getLangAndGender';
import { getText } from '@/utils/home';
import { albert, zen_tokyo_zoo } from '@/utils/fonts';
import useViewport from '@/app/components/hooks/useViewport';

export default function Hero() {
  const [state, setState] = useState<'new_in' | 'sale'>('new_in')
  const { lang, gender } = getLangAndGender(usePathname())
  const viewportWidth = useViewport()
  const param = state === 'new_in' ? 'new+in' : 'promos'

  const barStyle = {
    one: state === 'new_in' ? 'bg-t_black' : 'bg-t_white',
    two: state !== 'new_in' ? 'bg-t_black' : 'bg-t_white',
  }

  const newInOrSale = {
    bg: state === 'new_in' ? 'bg-t_yellow' : 'bg-t_red',
    text: state === 'new_in' ? 'text-t_black' : 'text-t_yellow',
  }

  const handleStateChange = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement

    if (target.dataset.state === state) {
      return
    }

    setState(state === 'new_in' ? 'sale' : 'new_in')
  }

  return (
    <section className="w-full relative">
      <div className={`w-full flex p-3 ${state === 'sale' ? 'bg-t_black' : ''} rounded-[1.8rem]`}>
        <img
          src={`/images/hero/${state}_${gender}.jpg`}
          alt="a short haired man looking away from the camera into nature"
          width={100}
          height={100}
          className={`w-full h-full object-cover object-center rounded-[1.8rem] ${state === 'sale' ? 'lg:h-[46rem]' : ''}`}
        />
        {state === 'sale' &&
          <div className="w-[50%]">
            <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center" />
          </div>
        }
      </div>

      <div className={`absolute top-20 left-5 ${newInOrSale.bg} ${newInOrSale.text} w-[100px] h-[100px] grid place-items-center rounded-full md:top-5 lg:w-[180px] lg:h-[180px] lg:top-10 lg:left-10`}>
        <span className="text-[1.5625rem] font-bold font-futura tracking-[1px] lg:text-[3.4375rem]">{getText(state)}</span>
      </div>

      {viewportWidth < 1024 && (
        <div className="absolute top-10 left-0 right-0">
          <WithHome><Logo logoColor="white" onHero={true} /> </WithHome>
        </div>
      )}


      {state === 'new_in' ? (
        <p className="left-0 text-center font-alokary right-0 absolute bottom-36 lg:text-[6.25rem] text-[2.5rem] font-bold leading-none text-t_purple text-shadow shadow-black lg:bottom-[3rem] lg:left-[35rem] xl:left-[50rem]">
          <span className="block">RADI<span className="sm:block sm:mt-3 md:mt-4 lg:mt-6">ANT</span></span>
          <span className="block mt-6 lg:mt-9">REVI<span className="sm:block sm:mt-3 md:mt-4 lg:mt-6">VAL</span></span>
        </p>

      ) : (
        <div className="absolute top-[10rem] left-0 right-0 sm:top-[8rem] md:top-[6rem] lg:-right-[53rem] lg:top-[14rem]">
          <div className="relative text-center">
            <span className={`block ${zen_tokyo_zoo.className} text-[1.5625rem] -mb-10 text-t_green text-shadow-ne shadow-black sm:text-[3.75rem] lg:text-[2.1875rem]`}>UP TO</span>

            <span className="text-[6.875rem] left-0 right-0 mx-auto text-center font-avant_garde text-shadow-nm shadow-t_green sm:text-[18.75rem] lg:text-[11.25rem] absolute"> 80 </span>
            <span className="text-[6.875rem] left-0 right-0 mx-auto text-center font-avant_garde text-shadow-lg shadow-t_green sm:text-[18.75rem] lg:text-[11.25rem] absolute"> 80 </span>
            <span className="absolute -bottom-[6rem] left-0 right-0 mx-auto text-[2.5rem] font-noir_pro text-t_green text-shadow-pr shadow-black sm:text-[6.875rem] lg:text-[3.75rem] sm:-bottom-[22rem] lg:-bottom-[12rem]">%</span>

            <span className={`${zen_tokyo_zoo.className} absolute block mx-auto left-0 right-0 top-[12rem] text-[3.125rem] -rotate-17 text-t_green text-shadow-ne shadow-black sm:text-[7.5rem] sm:top-[24rem] lg:text-[3.125rem] lg:top-[14rem]`}>OFF</span>
          </div>
        </div>
      )}

      <Link href={`/${lang}/${gender}/products/?gender=${gender}&shop-by=${param}&sort-by=newfirst&page=1`}>
        <button
          className={`absolute left-0 right-0 bottom-14 bg-t_black text-t_white py-3 w-[160px] mx-auto rounded-full font-medium text-[0.8125rem] ${albert.className}`}
        >
          SHOP NOW
        </button>
      </Link>

      <div className="absolute left-0 right-0 bottom-6 mx-auto grid place-items-center grid-cols-2 justify-center w-[100px]">
        <div className={`w-10 h-1 ${barStyle.one} cursor-pointer`} data-state="new_in" onClick={handleStateChange}></div>
        <div className={`w-10 h-1 ${barStyle.two} cursor-pointer`} data-state="sale" onClick={handleStateChange}></div>
      </div>
    </section>
  )
}

