/* eslint-disable @next/next/no-img-element */
"use client"
import { useThemeStore } from '@/state/themeState'

export default function PopularBrands() {
  const { theme } = useThemeStore()
  const textColor = theme === 'dark' ? 'text-t_black' : 'text-t_white'

  return (
    <section className={`${textColor} bg-t_mustard w-full max-w-full`}>

      <span className={`text-[13.8vw] font-alokary block text-center col-start-2 col-end-6 row-start-1 tracking-normal mx-auto `}>
        POPULAR
      </span>

      <div className="grid grid-cols-[5vw_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_1fr_auto] justify-items-center *:rounded-[2.5rem] gap-[0.1875rem]">

        <img
          src={`/images/brands/adidas.jpg`}
          alt="a woman wearing a green striped adidas jacket"
          className="w-full h-full object-cover row-start-2 col-start-2 col-end-3"
        />
        <img
          src={`/images/brands/calvin-klein.jpg`}
          alt="calvin klein jeans from the back"
          className="w-full h-full object-cover row-start-2 col-start-3 col-end-4"
        />
        <img
          src={`/images/brands/vans.jpg`}
          alt="two black vans shoes on two pairs of feet"
          className="w-full h-full object-cover row-start-2 col-start-4 col-end-5"
        />
        <img
          src={`/images/brands/nike.jpg`}
          alt="a white nike shoe hanging from its shoelaces reflected in blue tiles"
          className="w-full h-full object-cover row-start-3 col-start-2 col-end-3"
        />
        <img
          src={`/images/brands/mango.jpg`}
          alt="a man wearing a green long sleeve shirt and a woman in an orange top in a rocky backdrop"
          className="w-full h-full object-cover row-start-3 col-start-3 col-end-4"
        />
        <img
          src={`/images/brands/h&m.jpg`}
          alt="a woman facing away but turning back her head toward the camera in a khaki trench coat"
          className="w-full h-full object-cover row-start-3 col-start-4 col-end-5"
        />
        <img
          src={`/images/brands/zara.jpg`}
          alt="a pair of black boots on a white background"
          className="w-full h-full object-cover row-start-4 col-start-2 col-end-3"
        />
        <img
          src={`/images/brands/lacoste.jpg`}
          alt="a man and a woman looking at the camera in baby blue lacoste jackets"
          className="w-full h-full object-cover row-start-4 col-start-3 col-end-4"
        />
        <img
          src={`/images/brands/converse.jpg`}
          alt="two pairs of feet in the classic low-top black and white converse shoes"
          className="w-full h-full object-cover row-start-4 col-start-4 col-end-5"
        />

      </div>
      <span className="text-[15.5vw] font-alokary block text-center col-span-5 row-start-5">
        BRANDS
      </span>
    </section>
  )
}

