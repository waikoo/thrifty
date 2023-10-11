import { HeroCarouselImageProps } from '@/types/home';
import Image from 'next/image';


export default function HeroCarouselSmallImage({ src, alt, className, priority }
  : HeroCarouselImageProps) {
  // 200, 300 small

  return (
    <div className="block max-w-[25%]" >
      <Image
        src={src}
        alt={alt}
        priority={priority}
        className={className} />
    </div>
  )
}
