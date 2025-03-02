/* eslint-disable @next/next/no-img-element */
"use client"
import useViewport from "@/app/components/hooks/useViewport"
import { useThemeStore } from "@/state/themeState"
import { heroAlt } from "@/app/components/data/home"
import { viewport } from "@/app/components/data/universalStyles"
import { Gender } from "@/types/link"
import { HeroState } from "@/types/home"
import HeroTextNewIn from '@/app/components/home/HeroTextNewIn';
import HeroTextSale from '@/app/components/home/HeroTextSale';

type HeroImageProps = {
  gender: Gender
  state: HeroState
}

export default function HeroImage({ gender, state }: HeroImageProps) {
  const { theme } = useThemeStore()
  const currentViewport = useViewport()
  const kidsNewInPosition = state === 'new_in' && gender === 'kids' ? 'objectPosition' : 'object-center'
  const kidsSalePosition = state === 'sale' && gender === 'kids' && currentViewport < viewport.lg ? 'objectPosition2' : 'object-center'
  const showOverlayOnDesktop = state === 'new_in' && currentViewport > viewport.xl ? '' : 'hidden'
  const borderRadius = 'rounded-[20px] md:rounded-[2.5rem] xl:rounded-[1.8rem]'
  const borderColor = state === 'sale' && theme === 'dark' ? 'border-t_green' : state === 'new_in' && theme === 'dark' ? 'border-t_purple' : ''
  const height = state === 'new_in' ? 'h-[437px] xl:h-[35rem] 2xl:h-[48rem] 3xl:h-[55rem]' : 'h-[437px] xl:h-[39.375]'
  const saleBorder = state === 'sale' ? 'border-t_yellow border-[10px] sm:border-[20px]' : ''

  return (
    <div className={`w-full transition flex ${borderRadius} object-cover h-[437px] xl:h-[35.375rem] 2xl:h-[48.2rem] 3xl:h-[55.2rem] rounded-[1.8rem] relative border-[0.125rem] ${borderColor}`}>
      {state === 'new_in' &&
        <div className={`w-[50%] h-full bg-gradient-to-l from-black ${showOverlayOnDesktop} absolute right-0 opacity-80 rounded-[1.8rem]`}></div>
      }

      <picture className="h-full w-full">
        <source
          srcSet={`/images/hero/${state}_${gender}.avif`}
          type="image/avif"
        />
        <source
          srcSet={`/images/hero/${state}_${gender}.webp`}
          type="image/webp"
        />
        <img
          src={`/images/hero/${state}_${gender}.jpg`}
          alt={heroAlt[state][gender]}
          width={100}
          height={100}
          fetchPriority="high"
          className={`w-full h-full object-cover ${kidsNewInPosition} ${kidsSalePosition} ${borderRadius} ${height} ${saleBorder}`}
        />
      </picture>

      {state === 'new_in' && <HeroTextNewIn />}

      {state === 'sale' && <HeroTextSale className="absolute" />}
    </div>
  )
}

