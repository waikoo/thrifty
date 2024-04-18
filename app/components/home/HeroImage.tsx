import { HeroState } from "@/types/home"
import getLangAndGender from "@/utils/getLangAndGender"
import { usePathname } from "next/navigation"

type HeroImageProps = {
  state: HeroState
}

export default function HeroImage({ state }: HeroImageProps) {
  const { gender } = getLangAndGender(usePathname())

  return (
    <div className={`w-full flex p-3 ${state === 'sale' ? 'bg-t_black' : ''} rounded-[1.8rem]`}>
      <img
        src={`/images/hero/${state}_${gender}.jpg`}
        alt="a short haired man looking away from the camera into nature"
        width={100}
        height={100}
        className={`w-full h-full object-cover object-center rounded-[1.8rem] ${state === 'sale' ? 'lg:h-[46rem]' : ''}`}
      />
      {state === 'sale' &&
        <div className="w-[50%]">
          <img src="/images/hero/starry.jpg" alt="starry sky" className="w-full h-full object-cover object-center" />
        </div>
      }
    </div>
  )
}
