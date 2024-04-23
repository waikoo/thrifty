/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { Gender, Locales } from '@/types/link'
import { albert, albert_500, rock_salt } from '@/utils/fonts'

type FilterHomeProps = {
  gender: Gender
  lang: Locales
}

export default function FilterHome({ gender, lang }: FilterHomeProps) {

  return (
    <section className={`bg-[url('/images/filters/water.jpg')] object-cover object-top h-[900px] w-full bg-fixed ${rock_salt.className}`}>

      <div className="flex flex-col">

        <div className="relative w-[80%] mx-auto bg-red-200">
          <img src={`/images/filters/${gender}1.jpg`}
            alt=""
            className="absolute inset-0 rounded-[2rem] mt-8 cardShadow object-cover h-[24rem]"
          />
          <div className="absolute flex flex-col text-[1.25rem] gap-[3rem] bg-red-200 inset-0 justify-between items-center top-[5rem] z-10 drop-shadow-lg text-shadow-fil text-t_white dark:text-t_black dark:shadow-t_white shadow-t_black">
            <p className="text-center">SET YOUR <span className="block">FILTERS</span></p>
            <p className="text-center">SAVE YOUR <span className="block">FILTERS</span></p>
            <p className="text-center">RECEIVE <span className="block">NOTIFICATIONS</span></p>
          </div>
        </div>

        <div className="relative w-[80%] mx-auto mt-[25rem]">
          <img src={`/images/filters/${gender}2.jpg`}
            alt=""
            className="absolute inset-0 rounded-[2rem] mt-8 cardShadow"
          />

          <div className="absolute flex flex-col justify-center items-center top-[5rem] left-0 right-0 z-10 text-shadow-fil text-t_white dark:text-t_black dark:shadow-t_white shadow-t_black">
            <p className="text-[1.4375rem] text-center">CUSTOMIZE <span className={`${albert.className} block text-[0.75rem]`}>YOUR SEARCHES</span></p>
            <p className="mt-2 text-[1.4375rem] text-center">SHOP FASTER<span className={`${albert.className} block text-[0.75rem]`}>THAN EVER BEFORE</span></p>

            <Link href={`/${lang}/${gender}/products?gender=${gender}&sort-by=newfirst&page=1`}
              className={`${albert_500.className} py-[0.5rem] px-[1.5rem] bg-t_black text-t_white rounded-full text-[0.8125rem] mt-[8rem] cursor-pointer`}
            >
              GO TO FILTERS
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

