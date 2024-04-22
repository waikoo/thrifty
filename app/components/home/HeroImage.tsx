/* eslint-disable @next/next/no-img-element */
import useViewport from "@/app/components/hooks/useViewport"
import { useThemeStore } from "@/state/themeState"
import { heroAlt } from "@/app/components/data/home"
import { viewport } from "@/app/components/data/universalStyles"
import { Gender } from "@/types/link"
import { HeroState } from "@/types/home"

type HeroImageProps = {
  gender: Gender
  state: HeroState
}

export default function HeroImage({ gender, state }: HeroImageProps) {
  const { theme } = useThemeStore()
  const currentViewport = useViewport()
  const blackOnSale = state === 'sale' ? 'bg-t_black' : ''
  const kidsNewInPosition = state === 'new_in' && gender === 'kids' ? 'objectPosition' : 'object-center'
  const kidsSalePosition = state === 'sale' && gender === 'kids' && currentViewport < viewport.lg ? 'objectPosition2' : 'object-center'
  const salePadding = state === 'sale' ? 'xl:p-2' : ''
  const inverse = theme === 'dark' ? 'from-white' : 'from-black'
  const showOverlayOnDesktop = state === 'new_in' && currentViewport > viewport.xl ? '' : 'hidden'
  const borderRadius = 'rounded-[1.25rem] md:rounded-[2.5rem]'
  const height = state === 'new_in' ? 'xl:h-[39.42rem]' : 'xl:-h-[39.375]'

  return (
    <div className={`w-full flex ${salePadding} ${blackOnSale} ${borderRadius} h-[27.3125rem] sm:h-[43rem] md:h-[60rem] xl:h-[39.375rem] relative`}>
      {state === 'new_in' &&
        <div className={`w-[50%] h-full bg-gradient-to-l ${inverse} ${showOverlayOnDesktop} absolute right-0 opacity-80 rounded-[1.8rem]`}></div>
      }
      <img
        src={`/images/hero/${state}_${gender}.jpg`}
        alt={heroAlt[state][gender]}
        width={100}
        height={100}
        className={`w-full h-full object-cover ${kidsNewInPosition} ${kidsSalePosition} ${borderRadius} ${height}`}
      />
      {state === 'sale' && currentViewport > viewport.xl &&
        <div className="w-[50%]">
          <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center rounded-[1.8rem]" />
        </div>
      }
    </div>
  )
}

