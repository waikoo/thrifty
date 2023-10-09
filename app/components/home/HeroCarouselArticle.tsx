import SubmitButton from "../SubmitButton"
import useHeroCarousel from "../hooks/useHeroCarousel"

export default function HeroCarouselArticle() {
  const { dynamicTitle } = useHeroCarousel(['NEW IN', 'PROMOS', 'FILTERS'])

  return (
    <article className="grid grid-rows-2 gap-5 py-10 max-h-[100%] max-w-[20%] flex-2">

      <h1 className="vertical-text text-5xl font-bold ml-auto height-half self-end mb-5">
        {dynamicTitle}
      </h1>

      <div className={`flex flex-col gap-10 max-w-[90%] pr-0 pl-5 ml-auto height-sm max-h-full self-start `}>
        <p className="text-xs font-light ml-auto min-w-xs pl-auto leading-none">
          Lorem ipsum dolor sit amet consectetur. Vitae orci libero posuere quis elementum non feugiat mi tellus. Nam pellentesque parturient rhoncus odio. Tristique cras cursus in massa nunc tempor adipiscing gravida.
        </p>

        <SubmitButton className="font-bold border-[0.2rem] border-bkg">SHOP NOW</SubmitButton>

      </div>

    </article>
  )
}
