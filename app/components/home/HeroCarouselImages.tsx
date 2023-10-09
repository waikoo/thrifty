import { HeroCarouselImagesProps } from '@/types/home';
import { StaticImageData } from 'next/image';
import { HeroCarouselLargeImage } from '.';
import { images } from '../data/home';
import HeroCarouselSmallImage from './HeroCarouselSmallImage';

export default function HeroCarouselImages({ selectedCircle }: HeroCarouselImagesProps) {
  return (

    <div className="flex flex-8 flex-grow gap-1">
      {images.small[selectedCircle]?.map((src: StaticImageData, index: number) => {
        console.log(src)
        return (

          <HeroCarouselSmallImage
            key={`Small${index}`}
            src={src}
            width={200}
            height={350}
            alt={`newIn_${index}`}
            className={'h-full object-cover'} />
        )
      })}

      <HeroCarouselLargeImage
        key={`Large${selectedCircle}`}
        src={images.large[selectedCircle]}
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
