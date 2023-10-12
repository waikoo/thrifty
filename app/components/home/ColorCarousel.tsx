import { Category, TColor } from '@/types/home'
import { ColorCarouselElement } from '.'
import { colors } from '../data/home'

export default function ColorCarousel({ category }: Category) {

  return (
    <section className="flex flex-col gap-5 items-center mt-12">

      <div className="flex flex-col items-center">

        <h2 className="text-content font-semibold text-[1.875rem] my-0 tracking-[0.16875em]">
          DISCOVER YOUR PERFECT PALETTE
        </h2>

        <span className="text-[0.75rem] font-medium tracking-[0.07875rem] my-0">
          Shop by Your Favorite Colors and Unleash Your Style
        </span>

      </div>

      <div className="grid grid-cols-4 gap-5 rounded-2xl p-5">
        {colors.map(({ id, color, imgUrl, alt }: TColor) => (
          <ColorCarouselElement
            key={id}
            color={color}
            imgUrl={imgUrl}
            alt={alt} />
        ))}
      </div>

    </section>
  )
}
