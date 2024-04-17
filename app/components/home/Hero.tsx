"use client"
import WithHome from '@/app/components/navigation/WithHome'
import Logo from '@/app/components/navigation/Logo'
import { albert } from '@/utils/fonts';
import { useState } from 'react';
import getLangAndGender from '@/utils/getLangAndGender';
import { usePathname } from 'next/navigation';
import { getText } from '@/utils/home';
import Link from 'next/link';

export default function Hero() {
  const [state, setState] = useState<'new_in' | 'sale'>('new_in')
  const { lang, gender } = getLangAndGender(usePathname())

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
      <div className="w-full h-[75vh]">
        <img
          src={`/images/hero/${state}_${gender}.jpg`}
          alt="a short haired man looking away from the camera into nature"
          width={100}
          height={100}
          className={`w-full h-full object-cover object-center rounded-[1.8rem]`}
        />
      </div>

      <div className={`absolute top-20 left-5 ${newInOrSale.bg} ${newInOrSale.text} w-[100px] h-[100px] grid place-items-center rounded-full md:top-5`}>
        <span className="text-[1.5625rem] font-bold font-futura tracking-[1px]">{getText(state)}</span>
      </div>

      <div className="absolute top-10 left-0 right-0">
        <WithHome><Logo logoColor="white" onHero={true} /> </WithHome>
      </div>

      <p className="left-0 text-center font-alokary right-0 absolute bottom-36 text-[2.5rem] font-bold leading-none text-t_purple text-shadow shadow-black ">
        <span className="block">RADIANT</span>
        <span className="block mt-6">REVIVAL</span>
      </p>

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

