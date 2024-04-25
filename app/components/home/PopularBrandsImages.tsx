import GapSVG from '@/app/components/home/icons/GapSVG'
import { popularBrands } from '@/app/components/data/home'
import { Gender, Locales } from '@/types/link'
import PopularBrandItem from './PopularBrandItem'

type PopularBrandsImagesProps = {
  lang: Locales
  gender: Gender
  theme: 'light' | 'dark'
}

export default function PopularBrandsImages({ lang, gender, theme }: PopularBrandsImagesProps) {

  return (
    <div className={`grid grid-cols-[5vw_auto_auto_auto_5vw] grid-rows-[auto_1fr_1fr_1fr_auto] xl:grid-cols-[5vw_auto_auto_auto_auto_auto_5vw] xl:grid-rows-[auto_1fr_1fr_auto] gap-[0.1875rem] md:gap-[0.3125rem] justify-items-center *:rounded-[2.5rem] md:text-[0.3125rem]`}>
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

      <PopularBrandItem
        brand="gap"
        lang={lang}
        gender={gender}
        theme={theme}
        className="hidden xl:block xl:row-start-3 xl:col-start-6 xl:col-end-7"
        alt="a woman and a man standing back to back in white t-shirts"
        SVG={GapSVG}
      />
    </div>
  )
}

