import { HeroCarouselImageProps } from '@/types/home';
import Image from 'next/image';

export default function HeroCarouselLargeImage({ src, alt, className, priority }: HeroCarouselImageProps) {
  return (
    <div className="block max-w-[50%]" >
      <Image
        src={src}
        className={className}
        priority={priority}
        alt={alt} />
    </div>
  )
}
