/* eslint-disable @next/next/no-img-element */
import { usePathname } from "next/navigation"

import getLangAndGender from "@/utils/getLangAndGender"
import useViewport from "@/app/components/hooks/useViewport"
import { useThemeStore } from "@/state/themeState"
import { useHomeStore } from "@/state/client/homeState"

export default function HeroImage() {
  const { heroState } = useHomeStore()
  const { gender } = getLangAndGender(usePathname())
  const { theme } = useThemeStore()
  const viewport = useViewport()
  const blackOnSale = heroState === 'sale' ? 'bg-t_black' : ''
  const kidsNewInPosition = heroState === 'new_in' && gender === 'kids' ? 'objectPosition' : 'object-center'
  const kidsSalePosition = heroState === 'sale' && gender === 'kids' && viewport < 1024 ? 'objectPosition2' : 'object-center'
  const salePadding = heroState === 'sale' ? 'lg:p-2' : ''
  const inverse = theme === 'dark' ? 'from-white' : 'from-black'

  return (
    <div className={`w-full flex ${salePadding} ${blackOnSale} rounded-[1.8rem] h-[25rem] sm:h-[43rem] md:h-[60rem] lg:h-[36rem] relative`}>
      {heroState === 'new_in' &&
        <div className={`w-[50%] h-[97%] bg-gradient-to-l ${inverse} absolute right-0 opacity-80 rounded-[1.8rem]`}></div>
      }
      <img
        src={`/images/hero/${heroState}_${gender}.jpg`}
        alt="a short haired man looking away from the camera into nature"
        width={100}
        height={100}
        className={`w-full h-full object-cover ${kidsNewInPosition} ${kidsSalePosition} rounded-[1.8rem] lg:h-[35rem]`}
      />
      {heroState === 'sale' && viewport > 1024 &&
        <div className="w-[50%]">
          <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center" />
        </div>
      }
    </div>
  )
}

