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
  const showOverlayOnDesktop = state === 'new_in' && currentViewport > viewport.xl ? '' : 'hidden'
  const borderRadius = 'rounded-[1.5rem] md:rounded-[2.5rem] xl:rounded-[1.8rem]'
  const borderColor = state === 'sale' && theme === 'dark' ? 'border-t_green' : state === 'new_in' && theme === 'dark' ? 'border-t_purple' : ''
  const height = state === 'new_in' ? 'xl:h-[35rem] 2xl:h-[48rem] 3xl:h-[55rem]' : 'xl:h-[39.375]'

  const otherState = state === 'new_in' ? 'sale' : 'new_in'

  const getSrc = (img: 'first' | 'second') => {
    const prefix = `/images/hero/`
    let name: string = ''

    if (state === 'new_in') {
      name = img === 'first' ? 'new_in' : 'sale'
    } else if (state === 'sale') {
      name = img === 'first' ? 'sale' : 'new_in'
    }

    return `${prefix}${name}_${gender}.jpg`
  }

  return (
    <div className={`w-full transition flex ${salePadding} ${blackOnSale} ${borderRadius} h-[27.3125rem] sm:h-[43rem] md:h-[60rem] xl:h-[35.375rem] 2xl:h-[48.2rem] 3xl:h-[55.2rem] rounded-[1.8rem] relative border-[0.125rem] ${borderColor}`}>
      {state === 'new_in' &&
        <div className={`w-[50%] h-full bg-gradient-to-l from-black ${showOverlayOnDesktop} absolute right-0 opacity-80 rounded-[1.8rem]`}></div>
      }

      <div className="flex overflow-hidden transition snap snap-center w-[200%]">
        <img
          src={getSrc('first')}
          alt={heroAlt[state][gender]}
          width={100}
          height={100}
          className={`w-full h-full object-cover animate-slide ${kidsNewInPosition} ${kidsSalePosition} ${borderRadius} ${height}`}
        />
        <img
          src={getSrc('second')}
          alt={heroAlt[otherState][gender]}
          width={100}
          height={100}
          className={`w-full h-full object-cover animate-slide ${kidsNewInPosition} ${kidsSalePosition} ${borderRadius} ${height}`}
        />
      </div>

      {state === 'sale' && currentViewport >= viewport.xl &&
        <div className="w-[50%]">
          <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center rounded-[1.8rem]" />
        </div>
      }
    </div>
  )
}

