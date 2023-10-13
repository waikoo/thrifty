import { StaticImageData } from 'next/image';
import { HeroCarouselLargeImage } from '.';
import { images } from '../data/home';
import useHeroCarousel from '../hooks/useHeroCarousel';
import HeroCarouselSmallImage from './HeroCarouselSmallImage';
import { Category } from '@/types/home';

export default function HeroCarouselImages({ category }: Category) {
  const { selectedCircle } = useHeroCarousel()
  // 200, 300 small
  // 410, 350 big

  return (
    <div className="flex gap-1 flex-1 min-w-[80%]">

      {images[category].small[selectedCircle]?.map((src: StaticImageData, index: number) => {

        return (
          <HeroCarouselSmallImage
            key={`Small${index}`}
            priority={true}
            src={src}
            alt={`newIn_${index}`}
            className={'h-full object-cover'} />
        )
      })}

      <HeroCarouselLargeImage
        key={`Large${selectedCircle}`}
        src={images[category].large[selectedCircle]}
        priority={true}
        alt={selectedCircle === 0 ? 'newIn_03'
          : selectedCircle === 1 ? 'promos_03'
            : selectedCircle === 2 ? 'filters_03'
              : 'hero image'}
        className="h-full object-cover"
      />
    </div>

  )
}
