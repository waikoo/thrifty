"use client"
import { useThemeStore } from '@/state/themeState'
import PopularBrandsImages from '@/app/components/home/PopularBrandsImages'

export default function PopularBrands() {
  const { theme } = useThemeStore()
  const textColor = theme === 'dark' ? 'text-t_black' : 'text-t_white'
  const bgColor = theme === 'dark' ? 'bg-t_black' : 'bg-t_white'

  return (
    <section className={`${textColor} bg-t_mustard w-full max-w-full relative`}>
      <div className={`absolute top-0 left-0 right-0 z-10 ${bgColor} h-10 -mt-2`}></div>
      <span className={`text-[13.8vw] font-alokary block text-center`}>
        POPULAR
      </span>

      <PopularBrandsImages />

      <span className="text-[15.5vw] font-alokary block text-center">
        BRANDS
      </span>
      <div className={`absolute bottom-0 left-0 right-0 z-10 ${bgColor} h-6 -mb-2`}></div>
    </section>
  )
}

