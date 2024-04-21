"use client"
import { useThemeStore } from '@/state/themeState'
import PopularBrandsImages from '@/app/components/home/PopularBrandsImages'

export default function PopularBrands() {
  const { theme } = useThemeStore()
  const textColor = theme === 'dark' ? 'text-t_black' : 'text-t_white'

  return (
    <section className={`${textColor} bg-t_mustard w-full max-w-full`}>

      <span className={`text-[13.8vw] font-alokary block text-center`}>
        POPULAR
      </span>

      <PopularBrandsImages />

      <span className="text-[15.5vw] font-alokary block text-center">
        BRANDS
      </span>
    </section>
  )
}

