"use client"
/* eslint-disable @next/next/no-img-element */
import AdidasSVG from '@/app/components/home/icons/AdidasSVG'
import CalvinKleinSVG from '@/app/components/home/icons/CalvinKleinSVG'
import VansSVG from '@/app/components/home/icons/VansSVG'
import NikeSVG from '@/app/components/home/icons/NikeSVG'
import MangoSVG from '@/app/components/home/icons/MangoSVG'
import HMSVG from '@/app/components/home/icons/HMSVG'
import ZaraSVG from '@/app/components/home/icons/ZaraSVG'
import LacosteSVG from '@/app/components/home/icons/LacosteSVG'
import ConverseSVG from '@/app/components/home/icons/ConverseSVG'
import GapSVG from '@/app/components/home/icons/GapSVG'

import { useThemeStore } from '@/state/themeState'
import { viewport } from '@/app/components/data/universalStyles'
import useViewport from '@/app/components/hooks/useViewport'
import { Gender, Locales } from '@/types/link'
import PopularBrandItem from './PopularBrandItem'

type PopularBrandsImagesProps = {
  lang: Locales
  gender: Gender
}

export default function PopularBrandsImages({ lang, gender }: PopularBrandsImagesProps) {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()
  const grid = viewportWidth < viewport.xl ? 'grid-cols-[5vw_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_1fr_auto]' : 'grid-cols-[5vw_auto_auto_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_auto]'
  const gap = viewportWidth > viewport.md ? 'gap-[0.3125rem]' : 'gap-[0.1875rem]'

  return (
    <div className={`grid ${grid} justify-items-center *:rounded-[2.5rem] ${gap} md:text-[0.3125rem]`}>

      <PopularBrandItem
        brand="adidas"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-2 col-start-2 col-end-3"
        alt="a woman wearing a green striped adidas jacket"
        SVG={AdidasSVG}
      />

      <PopularBrandItem
        brand="calvin+klein"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-2 col-start-3 col-end-4"
        alt="calvin klein jeans from the back"
        SVG={CalvinKleinSVG}
      />

      <PopularBrandItem
        brand="vans"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-2 col-start-4 col-end-5"
        alt="two black vans shoes on two pairs of feet"
        SVG={VansSVG}
      />

      <PopularBrandItem
        brand="nike"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-3 col-start-2 col-end-3 xl:col-start-5 xl:col-end-6 xl:row-start-2"
        alt="a white Nike shoe hanging from its shoelaces reflected in blue tiles"
        SVG={NikeSVG}
      />

      <PopularBrandItem
        brand="mango"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-3 col-start-3 col-end-4 xl:row-start-2 xl:col-start-6 xl:col-end-7"
        alt="a man wearing a green long sleeve shirt and a woman in an orange top in a rocky backdrop"
        SVG={MangoSVG}
      />
      <PopularBrandItem
        brand="h&m"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-3 col-start-4 col-end-5 xl:row-start-3 xl:col-start-2 xl:col-end-3"
        alt="a woman facing away but turning back her head toward the camera in a khaki trench coat"
        SVG={HMSVG}
      />

      <PopularBrandItem
        brand="zara"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-4 col-start-2 col-end-3 xl:row-start-3 xl:col-start-3 xl:col-end-4"
        alt="a pair of black boots on a white background"
        SVG={ZaraSVG}
      />

      <PopularBrandItem
        brand="lacoste"
        lang={lang}
        gender={gender}
        theme={theme}
        className="row-start-4 col-start-3 col-end-4 xl:row-start-3 xl:col-start-4 xl:col-end-5"
        alt="a man and a woman looking at the camera in baby blue lacoste jackets"
        SVG={LacosteSVG}
      />
      <PopularBrandItem
        brand="converse"
        lang={lang}
        gender={gender}
        theme={theme}
        className="relative row-start-4 col-start-4 col-end-5 xl:row-start-3 xl:col-start-5 xl:col-end-6"
        alt="two pairs of feet in the classic low-top black and white converse shoes"
        SVG={ConverseSVG}
      />

      {viewportWidth >= viewport.xl &&
        <PopularBrandItem
          brand="gap"
          lang={lang}
          gender={gender}
          theme={theme}
          className="xl:row-start-3 xl:col-start-6 xl:col-end-7"
          alt="a woman and a man standing back to back in white t-shirts"
          SVG={GapSVG}
        />
      }
    </div>
  )
}

