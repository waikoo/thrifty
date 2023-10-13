"use client"
import { Category } from '@/types/home';
import { HeroCarouselArticle, HeroCarouselImages, HeroCarouselNavigator } from '.';

const HeroCarousel = ({ category }: Category) => {

  return (
    <section className="flex flex-col gap-5 max-w-full">

      <div className={`flex flex-row gap-2 px-20 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-full aspect-ratio max-h-[39.375rem]`}>
        <HeroCarouselImages category={category} />
        <HeroCarouselArticle />
      </div>

      <HeroCarouselNavigator />

    </section>
  )
}

export default HeroCarousel
