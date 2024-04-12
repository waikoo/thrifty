"use client"
import { Gender, Locales } from "@/types/link"
import { useTranslation } from '../../../i18n/client'
import SubmitButton from "../SubmitButton"
import useHeroCarousel from "../hooks/useHeroCarousel"
import Link from "next/link"

type HeroCarouselArticleProps = {
  lang: Locales
  gender: Gender
}

export default function HeroCarouselArticle({ lang, gender }: HeroCarouselArticleProps) {
  const { t } = useTranslation(lang, 'home')

  const { dynamicTitle } = useHeroCarousel([
    t('heroCarousel.titles.one'),
    t('heroCarousel.titles.two'),
    t('heroCarousel.titles.three')
  ])
  const shopBy = dynamicTitle !== 'FILTERS' ? '&shop-by=' : ''
  const param = dynamicTitle === 'NEW IN' ? 'new+in' : dynamicTitle === 'PROMOS' ? 'promos' : ''

  return (
    <article className="ml-6 grid auto-rows-min grid-rows-2 gap-1 py-6 sm:gap-0 md:gap-0">

      <h1 className="hero-h1 my-auto ml-auto self-end text-lg sm:text-3xl md:self-start md:text-5xl lg:text-[4rem]">
        {dynamicTitle}
      </h1>

      <div className={`flex flex-col justify-center h-full gap-0 sm:gap-0 md:gap-2 lg:gap-8  max-w-[90%] pr-0 pl-5 ml-auto self-start`}>
        <p className="hero-p pl-auto ml-auto leading-none sm:text-xs">
          {t('heroCarousel.paragraph')}
        </p>

        <Link href={`/${lang}/${gender}/products/?gender=${gender}${shopBy}${param}&sort-by=newfirst&page=1`}>
          <SubmitButton hero className="border-bkg whitespace-nowrap border-[0.2rem] font-bold">
            {t('heroCarousel.button')}
          </SubmitButton>
        </Link>

      </div>

    </article>
  )
}
