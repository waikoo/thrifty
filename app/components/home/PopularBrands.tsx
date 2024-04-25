"use client"
import { useThemeStore } from '@/state/themeState'
import PopularBrandsImages from '@/app/components/home/PopularBrandsImages'
import { Gender, Locales } from '@/types/link'
import PopularBrandsText from '@/app/components/home/PopularBrandsText'

type PopularBrandsProps = {
  lang: Locales
  gender: Gender
}

export default function PopularBrands({ lang, gender }: PopularBrandsProps) {
  const { theme } = useThemeStore()

  return (
    <PopularBrandsText theme={theme}>
      <PopularBrandsImages lang={lang} gender={gender} theme={theme} />
    </PopularBrandsText>
  )
}

