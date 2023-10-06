import { ColorCarouselElement } from '.'
import { colors } from '../data'

export default function ColorCarousel() {
  return (
    <section className="flex flex-col gap-5 items-center mt-15">
      <h2 className="text-content font-bold pt-15">DISCOVER YOUR PERFECT PALETTE</h2>
      <span>Shop by Your Favorite Colors and Unleash Your Style</span>
      <div className="grid grid-cols-4 gap-5 rounded-2xl p-5">
        {colors.map(color => (
          <ColorCarouselElement
            key={color.id}
            color={color.color}
            imgUrl={color.imgUrl}
            alt={color.alt} />
        ))}
      </div>

    </section>
  )
}
