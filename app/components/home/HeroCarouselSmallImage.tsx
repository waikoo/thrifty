import Image, { StaticImageData } from 'next/image';

type HeroCarouselSmallImageProps = {
  src: StaticImageData,
  alt: string,
  width: number,
  height: number,
  className?: string
  priority: boolean
}

export default function HeroCarouselSmallImage({ src, alt, width, height, className, priority }
  : HeroCarouselSmallImageProps) {

  return (
    <div className="block max-w-full " >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority={priority}
        className={className} />
    </div>
  )
}
