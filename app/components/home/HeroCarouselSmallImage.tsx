import Image, { StaticImageData } from 'next/image';

type HeroCarouselSmallImageProps = {
  src: StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string
}

export default function HeroCarouselSmallImage({ src, alt, width, height, className }
  : HeroCarouselSmallImageProps) {

  return (
    <div className="block max-w-full " >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className} />
    </div>
  )
}
