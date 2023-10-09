import Image, { StaticImageData } from 'next/image';

type HeroCarouselLargeImageProps = {
  src: StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string
}

export default function HeroCarouselLargeImage({ src, alt, width, height, className }: HeroCarouselLargeImageProps) {
  return (
    <div className="block max-w-full" >
      <Image
        src={src}
        width={width}
        height={height}
        className={className}
        alt={alt} />
    </div>
  )
}
