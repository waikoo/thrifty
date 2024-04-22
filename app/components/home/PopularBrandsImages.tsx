/* eslint-disable @next/next/no-img-element */
import AdidasSVG from '@/app/components/home/icons/AdidasSVG'
import CalvinKleinSVG from '@/app/components/home/icons/CalvinKleinSVG'
import { useThemeStore } from '@/state/themeState'
import VansSVG from '@/app/components/home/icons/VansSVG'
import NikeSVG from '@/app/components/home/icons/NikeSVG'
import MangoSVG from '@/app/components/home/icons/MangoSVG'
import HMSVG from '@/app/components/home/icons/HMSVG'
import ZaraSVG from '@/app/components/home/icons/ZaraSVG'
import LacosteSVG from '@/app/components/home/icons/LacosteSVG'
import ConverseSVG from '@/app/components/home/icons/ConverseSVG'
import { viewport } from '@/app/components/data/universalStyles'
import useViewport from '@/app/components/hooks/useViewport'
import GapSVG from '@/app/components/home/icons/GapSVG'

export default function PopularBrandsImages() {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()
  const textColor = theme === 'light' ? 'black' : 'white'
  const bgColor = theme === 'light' ? 'bg-t_white/40' : 'bg-t_black/40'
  const borderRadius = 'rounded-[15px] sm:rounded-[30px] lg:rounded-[40px]'
  const grid = viewportWidth < viewport.xl ? 'grid-cols-[5vw_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_1fr_auto]' : 'grid-cols-[5vw_auto_auto_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_auto]'
  const gap = viewportWidth > viewport.md ? 'gap-[0.3125rem]' : 'gap-[0.1875rem]'

  return (
    <div className={`grid ${grid} justify-items-center *:rounded-[2.5rem] ${gap} md:text-[0.3125rem]`}>

      {/*Adidas*/}
      <div className={`relative row-start-2 col-start-2 col-end-3 ${bgColor}`}>
        <img
          src={`/images/brands/adidas.jpg`}
          alt="a woman wearing a green striped adidas jacket"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <AdidasSVG className="absolute inset-0 z-30 mx-auto" textColor={textColor} />
      </div>

      {/*Calvin Klein*/}
      <div className="relative row-start-2 col-start-3 col-end-4">
        <img
          src={`/images/brands/calvin-klein.jpg`}
          alt="calvin klein jeans from the back"
          className={`w-full h-full ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <CalvinKleinSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Vans*/}
      <div className="relative row-start-2 col-start-4 col-end-5">
        <img
          src={`/images/brands/vans.jpg`}
          alt="two black vans shoes on two pairs of feet"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <VansSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Nike*/}
      <div className="relative row-start-3 col-start-2 col-end-3 xl:col-start-5 xl:col-end-6 xl:row-start-2">
        <img
          src={`/images/brands/nike.jpg`}
          alt="a white nike shoe hanging from its shoelaces reflected in blue tiles"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <NikeSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Mango*/}
      <div className="relative row-start-3 col-start-3 col-end-4 xl:row-start-2 xl:col-start-6 xl:col-end-7">
        <img
          src={`/images/brands/mango.jpg`}
          alt="a man wearing a green long sleeve shirt and a woman in an orange top in a rocky backdrop"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <MangoSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*H&M*/}
      <div className="relative row-start-3 col-start-4 col-end-5 xl:row-start-3 xl:col-start-2 xl:col-end-3">
        <img
          src={`/images/brands/h&m.jpg`}
          alt="a woman facing away but turning back her head toward the camera in a khaki trench coat"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <HMSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Zara*/}
      <div className="relative row-start-4 col-start-2 col-end-3 xl:row-start-3 xl:col-start-3 xl:col-end-4">
        <img
          src={`/images/brands/zara.jpg`}
          alt="a pair of black boots on a white background"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <ZaraSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Lacoste*/}
      <div className="relative row-start-4 col-start-3 col-end-4 xl:row-start-3 xl:col-start-4 xl:col-end-5">
        <img
          src={`/images/brands/lacoste.jpg`}
          alt="a man and a woman looking at the camera in baby blue lacoste jackets"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <LacosteSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*Converse*/}
      <div className="relative row-start-4 col-start-4 col-end-5 xl:row-start-3 xl:col-start-5 xl:col-end-6">
        <img
          src={`/images/brands/converse.jpg`}
          alt="two pairs of feet in the classic low-top black and white converse shoes"
          className={`w-full h-full object-cover ${borderRadius}`}
        />
        <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
        <ConverseSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
      </div>

      {/*GAP*/}
      {viewportWidth > viewport.xl &&
        <div className="relative xl:row-start-3 xl:col-start-6 xl:col-end-7">
          <img
            src={`/images/brands/converse.jpg`}
            alt="two pairs of feet in the classic low-top black and white converse shoes"
            className={`w-full h-full object-cover ${borderRadius}`}
          />
          <div className={`absolute inset-0 z-20 ${borderRadius} ${bgColor}`}></div>
          <GapSVG className={`absolute inset-0 z-30 mx-auto ${borderRadius}`} textColor={textColor} />
        </div>
      }
    </div>
  )
}

