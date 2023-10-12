import { Category } from '@/types/home'
import ColorCarouselGrid from './ColorCarouselGrid'

type ColorCarouselProps = {
  category: Category['category']
}
export default function ColorCarousel({ category }: ColorCarouselProps) {

  return (
    <section className="flex flex-col gap-5 items-center mt-20 w-full">

      <div className="flex flex-col items-center">

        <h2 className="text-content font-semibold text-[1.875rem] my-0 tracking-[0.16875em]">
          DISCOVER YOUR PERFECT PALETTE
        </h2>

        <span className="text-[0.75rem] font-medium tracking-[0.07875rem] my-0 pt-2">
          Shop by Your Favorite Colors and Unleash Your Style
        </span>


        <ColorCarouselGrid category={category} />

      </div>
    </section>
  )
}
