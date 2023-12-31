"use client"
import { StaticImageData } from 'next/image';
import { HeroCarouselLargeImage } from '.';
import { images } from '../data/home';
import useHeroCarousel from '../hooks/useHeroCarousel';
import HeroCarouselSmallImage from './HeroCarouselSmallImage';
import { Category } from '@/types/home';

type HeroCarouselImagesProps = {
  gender: Category['category']
}

export default function HeroCarouselImages({ gender }: HeroCarouselImagesProps) {
  const { selectedCircle } = useHeroCarousel()

  return (
    <div className="flex min-w-[80%] flex-1 gap-1">

      {images[gender].small[selectedCircle]?.map((src: StaticImageData, index: number) => {

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
        src={images[gender].large[selectedCircle]}
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
