"use client"
import { HeroCarouselArticle, HeroCarouselImages, HeroCarouselNavigator } from '.';

const HeroCarousel = () => {

  return (
    <section className="flex flex-col gap-5 max-h-fit max-w-full pt-2">
      <div className={`flex gap-2 px-12 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-full`}>

        <HeroCarouselImages />
        <HeroCarouselArticle />

      </div>

      <HeroCarouselNavigator />

    </section>
  )
}

export default HeroCarousel
