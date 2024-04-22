"use client"
import { useThemeStore } from '@/state/themeState'
import PopularBrandsImages from '@/app/components/home/PopularBrandsImages'

export default function PopularBrands() {
  const { theme } = useThemeStore()
  const textColor = theme === 'dark' ? 'text-t_black' : 'text-t_white'
  const bgColor = theme === 'dark' ? 'bg-t_black' : 'bg-t_white'

  return (
    <section className={`${textColor} bg-t_mustard w-full max-w-full relative mt-7`}>
      <div className={`absolute top-0 left-0 right-0 z-10 ${bgColor} h-[6vw] sm:h-[4.5vw] lg:h-[3vw] -mt-2`}></div>
      <span className={`text-[13.8vw] lg:text-[8.5vw] lg:ml-[2rem] lg:tracking-[3rem] font-alokary block text-center`}>
        POPULAR
      </span>

      <PopularBrandsImages />

      <span className="text-[15.5vw] lg:text-[8.5vw] lg:ml-[4rem] lg:tracking-[5rem] font-alokary block text-center -mt-1">
        BRANDS
      </span>
      <div className={`absolute bottom-0 left-0 right-0 z-10 ${bgColor} h-[4.2vw] sm:h-[3vw] lg:h-[1.7vw] -mb-2`}></div>
    </section>
  )
}

