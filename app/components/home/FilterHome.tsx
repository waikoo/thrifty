"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import { Gender, Locales } from '@/types/link'
import { albert_800, albert_900 } from '@/utils/fonts'
import { viewport } from '@/app/components/data/universalStyles'
import useViewport from '@/app/components/hooks/useViewport'

type FilterHomeProps = {
  gender: Gender
  lang: Locales
}

export default function FilterHome({ gender, lang }: FilterHomeProps) {
  const bgColor = gender === 'women' ? `bg-t_fil_women` : gender === 'men' ? 'bg-t_fil_men' : 'bg-t_fil_kids'
  const viewportWidth = useViewport()

  return (
    <>
      <div className="w-full bg-t_white h-[3rem] xl:h-[8rem]"></div>
      <section className={`relative w-full bg-cover pb-[4rem] overflow-hidden ${bgColor}`}>
        <p className="flex flex-col xl:flex-row xl:items-center py-[3rem] gap-0 font-futura_bold tracking-tighter text-t_white/90 text-stroke text-blurry text-center md:text-[5rem] mx-auto text-shadow shadow-black/[2%]">
          {viewportWidth < viewport.xl ? (
            <>
              <span className="text-[9vw] xl:text-[4.375rem] whitespace-nowrap">SHOP FASTER</span>
              <span className="-mt-5 xl:mt-0 xl:ml-4 text-[9vw] xl:text-[4.375rem] whitespace-nowrap">THAN EVER</span>
              <span className="-mt-5 xl:mt-0 xl:ml-4 text-[9vw] xl:text-[4.375rem]">BEFORE</span>
            </>
          ) : (
            <p className="mx-auto">SHOP FASTER THAN EVER BEFORE</p>
          )
          }
        </p>
        {/* <div className="absolute top-0 left-0 right-0 w-full bg-gradient-to-b from-t_white dark:from-t_black h-[18rem]"></div> */}
        <div className="flex flex-col ">

          <div className="w-[95%] xl:w-[120%] mx-auto relative">
            {viewportWidth < viewport.xl ? (
              <img src={`/images/filters/${gender}.png`}
                alt=""
                className="block w-full drop-shadow-[0_15px_20px_rgba(0,0,0,0.5)]" />
            ) : (
              <img src={`/images/filters/${gender}_tiled.png`}
                alt=""
                className="w-[140vw] -ml-[15rem] object-cover object-center object mr-10"
              />
            )}

            <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-1/2 flex flex-col gap-4">
              <div className="xl:ml-20 flex items-center">
                <span className="font-futura_bold text-[8vw] xl:text-[3.125rem] tracking-tight text-t_white text-stroke text-blurry text-shadow shadow-black/15">SET</span>
                <span className={`text-t_white ml-2 xl:ml-5 xl:-mb-2 text-[5vw] xl:text-[1.1875rem] whitespace-nowrap ${albert_800.className}`}>YOUR FILTERS</span>
              </div>
              <div className="xl:ml-20 flex items-center">
                <span className="font-futura_bold text-[8vw] xl:text-[3.125rem] tracking-tight text-t_white text-stroke text-blurry text-shadow shadow-black/15">SAVE</span>
                <span className={`text-t_white ml-2 xl:ml-5 xl:-mb-2 text-[5vw] xl:text-[1.1875rem] whitespace-nowrap ${albert_800.className}`}>YOUR FILTERS</span>
              </div>
              <div className="xl:ml-20 flex items-center">
                <span className="font-futura_bold text-[8vw] xl:text-[3.125rem] tracking-tighter text-t_white text-stroke text-blurry text-shadow shadow-black/15">RECEIVE</span>
                <span className={`text-t_white ml-2 xl:ml-5 xl:-mb-2 text-[5vw] xl:text-[1.1875rem] whitespace-nowrap ${albert_800.className}`}>NOTIFICATIONS</span>
              </div>
            </div>

          </div>

          <Link href={`/${lang}/${gender}/products?gender=${gender}&sort-by=newfirst&page=1`}
            className={`${albert_900.className} text-t_black bg-t_white/20 xl:bg-t_white text-[3vw] xl:text-[1.0625rem] whitespace-nowrap cursor-pointer py-3 pb-2 md:py-4 md:px-16 md:pb-3 px-8 xl:px-[2.5rem] border-[0.1rem] border-t_white rounded-full mx-auto drop-shadow-2xl grid place-items-center buttonShadow mt-[3rem] xl:-mt-[7rem] tracking-wide`}
          >
            GO TO FILTERS
          </Link>

        </div>
      </section>
      <div className="w-full bg-t_white h-[3rem] xl:h-[8rem]"></div>
      {/* <div className={`w-full ${bgColor} h-[6rem] xl:h-[8rem]`}></div> */}
    </>
  )
}

