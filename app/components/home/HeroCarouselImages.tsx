import { StaticImageData } from 'next/image';
import { HeroCarouselLargeImage } from '.';
import { images } from '../data/home';
import useHeroCarousel from '../hooks/useHeroCarousel';
import HeroCarouselSmallImage from './HeroCarouselSmallImage';
import { Category } from '@/types/home';

export default function HeroCarouselImages({ category }: Category) {
  const { selectedCircle } = useHeroCarousel()

  return (
    <div className="flex flex-8 flex-grow gap-1 h-[550px]">

      {images[category].small[selectedCircle]?.map((src: StaticImageData, index: number) => {
        console.log(src)
        return (
          <HeroCarouselSmallImage
            key={`Small${index}`}
            priority={src.src.includes('women_new_in')}
            src={src}
            width={200}
            height={350}
            alt={`newIn_${index}`}
            className={'h-full object-cover'} />
        )
      })}

      <HeroCarouselLargeImage
        key={`Large${selectedCircle}`}
        src={images[category].large[selectedCircle]}
        priority={images[category].large[selectedCircle].src.includes('women_new_in')}
        width={410}
        height={350}
        alt={selectedCircle === 0 ? 'newIn_03'
          : selectedCircle === 1 ? 'promos_03'
            : selectedCircle === 2 ? 'filters_03'
              : 'hero image'}
        className="h-full object-cover"
      />
    </div>

  )
}