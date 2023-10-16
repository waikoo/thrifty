"use client"
import { Category } from '@/types/home';
import { HeroCarouselArticle, HeroCarouselImages, HeroCarouselNavigator } from '.';

const HeroCarousel = ({ category }: Category) => {

  return (
    <section className="flex max-w-full flex-col gap-5">

      <div className={`flex flex-row gap-2 px-20 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-full`}>
        <HeroCarouselImages category={category} />
        <HeroCarouselArticle />
      </div>

      <HeroCarouselNavigator />

    </section>
  )
}

export default HeroCarousel
