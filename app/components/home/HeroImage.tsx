import { usePathname } from "next/navigation"

import { HeroState } from "@/types/home"
import getLangAndGender from "@/utils/getLangAndGender"
import useViewport from "@/app/components/hooks/useViewport"

type HeroImageProps = {
  state: HeroState
}

export default function HeroImage({ state }: HeroImageProps) {
  const { gender } = getLangAndGender(usePathname())
  const viewport = useViewport()
  const blackOnSale = state === 'sale' ? 'bg-t_black' : ''
  const kidsNewInPosition = state === 'new_in' && gender === 'kids' ? 'objectPosition' : 'object-center'
  const kidsSalePosition = state === 'sale' && gender === 'kids' ? 'objectPosition2' : 'object-center'
  // const largeLengthSale = state === 'sale' ? 'lg:h-[46rem]' : ''

  return (
    <div className={`w-full flex lg:p-3 ${blackOnSale} rounded-[1.8rem] bg-red-300 h-[25rem] sm:h-[43rem] md:h-[60rem] lg:h-full`}>
      <img
        src={`/images/hero/${state}_${gender}.jpg`}
        alt="a short haired man looking away from the camera into nature"
        width={100}
        height={100}
        className={`w-full h-full object-cover ${kidsNewInPosition} ${kidsSalePosition} rounded-[1.8rem] lg:h-[46rem]`}
      />
      {state === 'sale' && viewport > 1024 &&
        <div className="w-[50%]">
          <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center" />
        </div>
      }
    </div>
  )
}

