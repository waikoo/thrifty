"use client"
import { Locales } from "@/types/home"
import { useTranslation } from '../../../i18n/client'
import SubmitButton from "../SubmitButton"
import useHeroCarousel from "../hooks/useHeroCarousel"

type HeroCarouselArticleProps = {
  lang: Locales
}

export default function HeroCarouselArticle({ lang }: HeroCarouselArticleProps) {
  const { t } = useTranslation(lang, 'home')

  const { dynamicTitle } = useHeroCarousel([
    t('heroCarousel.titles.one'),
    t('heroCarousel.titles.two'),
    t('heroCarousel.titles.three')
  ])

  return (
    <article className="ml-6 grid auto-rows-min grid-rows-2 gap-5 py-6 sm:gap-0 md:gap-2">

      <h1 className="hero-h1 my-auto ml-auto self-end text-lg sm:text-3xl md:self-start md:text-5xl lg:text-[4rem]">
        {dynamicTitle}
      </h1>

      <div className={`flex flex-col gap-0 sm:gap-0 md:gap-4 lg:gap-10  max-w-[90%] pr-0 pl-5 ml-auto self-start `}>
        <p className="hero-p pl-auto ml-auto leading-none sm:text-xs">
          {t('heroCarousel.paragraph')}
        </p>

        <SubmitButton hero className="border-bkg whitespace-nowrap border-[0.2rem] font-bold">
          {t('heroCarousel.button')}
        </SubmitButton>

      </div>

    </article>
  )
}
