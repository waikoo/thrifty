import { Category, TColor } from '@/types/home'
import ColorCarouselGrid from './ColorCarouselGrid'

type ColorCarouselProps = {
  category: Category['category']
}

export default function ColorCarousel({ category }: ColorCarouselProps) {

  return (
    <section className="mt-20 flex w-full flex-col items-center gap-5">

      <div className="flex flex-col items-center">

        <h2 className="text-content my-0 text-[1.875rem] font-semibold tracking-[0.16875em]">
          DISCOVER YOUR PERFECT PALETTE
        </h2>

        <span className="my-0 pt-2 text-[0.75rem] font-medium tracking-[0.07875rem]">
          Shop by Your Favorite Colors and Unleash Your Style
        </span>


        <ColorCarouselGrid category={category} />

      </div>
    </section>
  )
}
