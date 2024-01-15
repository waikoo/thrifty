import { Category, Locales } from '@/types/home';
import { HeroCarouselArticle, HeroCarouselImages, HeroCarouselNavigator } from '@/app/components/home';

type HeroCarouselProps = {
  gender: Category['category']
  lang: Locales
}

const HeroCarousel = ({ gender, lang }: HeroCarouselProps) => {

  return (
    <section className="flex max-w-full flex-col gap-5">

      <div className={`flex flex-row gap-2 px-20 rounded-[2.8125rem] m-0 bg-content text-bkg max-w-full h-[75vh]`}>
        <HeroCarouselImages {... { gender }} />
        <HeroCarouselArticle {... { lang, gender }} />
      </div>

      <HeroCarouselNavigator />

    </section>
  )
}

export default HeroCarousel
