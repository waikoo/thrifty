import Image, { StaticImageData } from 'next/image';

type HeroCarouselLargeImageProps = {
  src: StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string,
  priority: boolean
}

export default function HeroCarouselLargeImage({ src, alt, width, height, className, priority }: HeroCarouselLargeImageProps) {
  return (
    <div className="block max-w-full" >
      <Image
        src={src}
        width={width}
        height={height}
        className={className}
        priority={priority}
        alt={alt} />
    </div>
  )
}
