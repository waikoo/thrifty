"use client"
import GapSVG from '@/app/components/home/icons/GapSVG'
import { popularBrands } from '@/app/components/data/home'
import { useThemeStore } from '@/state/themeState'
import { viewport } from '@/app/components/data/universalStyles'
import useViewport from '@/app/components/hooks/useViewport'
import { Gender, Locales } from '@/types/link'
import PopularBrandItem from './PopularBrandItem'

type PopularBrandsImagesProps = {
  lang: Locales
  gender: Gender
}

export default function PopularBrandsImages({ lang, gender }: PopularBrandsImagesProps) {
  const viewportWidth = useViewport()
  const { theme } = useThemeStore()
  const grid = viewportWidth < viewport.xl ? 'grid-cols-[5vw_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_1fr_auto]' : 'grid-cols-[5vw_auto_auto_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_auto]'
  const gap = viewportWidth > viewport.md ? 'gap-[0.3125rem]' : 'gap-[0.1875rem]'

  return (
    <div className={`grid ${grid} justify-items-center *:rounded-[2.5rem] ${gap} md:text-[0.3125rem]`}>
      {popularBrands.map((brand) => (
        <PopularBrandItem
          key={brand.brand}
          brand={brand.brand}
          lang={lang}
          gender={gender}
          theme={theme}
          className={brand.className}
          alt={brand.alt}
          SVG={brand.SVG}
        />
      ))}

      {viewportWidth >= viewport.xl &&
        <PopularBrandItem
          brand="gap"
          lang={lang}
          gender={gender}
          theme={theme}
          className="xl:row-start-3 xl:col-start-6 xl:col-end-7"
          alt="a woman and a man standing back to back in white t-shirts"
          SVG={GapSVG}
        />
      }
    </div>
  )
}

