import SubmitButton from "../SubmitButton"
import { HERO_CAROUSEL_TITLES } from "../data/home"
import useHeroCarousel from "../hooks/useHeroCarousel"

export default function HeroCarouselArticle() {
  const { dynamicTitle } = useHeroCarousel(HERO_CAROUSEL_TITLES)

  return (
    <article className="ml-6 grid auto-rows-min grid-rows-2 gap-5 py-6 sm:gap-0 md:gap-2">

      <h1 className="hero-h1 my-auto ml-auto self-end text-lg sm:text-3xl md:self-start md:text-5xl lg:text-[4rem]">
        {dynamicTitle}
      </h1>

      <div className={`flex flex-col gap-0 sm:gap-0 md:gap-4 lg:gap-10  max-w-[90%] pr-0 pl-5 ml-auto self-start `}>
        <p className="hero-p pl-auto ml-auto leading-none sm:text-xs">
          Lorem ipsum dolor sit amet consectetur. Vitae orci libero posuere quis elementum non feugiat mi tellus. Nam pellentesque parturient rhoncus odio. Tristique cras cursus in massa nunc tempor adipiscing gravida.
        </p>

        <SubmitButton hero className="border-bkg whitespace-nowrap border-[0.2rem] font-bold">SHOP NOW</SubmitButton>

      </div>

    </article>
  )
}
