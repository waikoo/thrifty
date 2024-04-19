import { Gender } from "@/types/link"

type ColorCarouselImagesProps = {
  images: string[]
  gender: Gender
}

export default function ColorCarouselImages({ images, gender }: ColorCarouselImagesProps) {

  return (
    <div className="grid grid-cols-2 gap-[0.5rem] md:grid-cols-3 md:gap-[1rem] lg:gap-[2rem] lg:grid-cols-4">
      {images.map(filename => (
        <img
          src={`/images/color_carousel/${gender}/${filename}`}
          alt={filename}
          key={filename}
          className="rounded-[10rem]"
          width={100}
          height={100}
        />
      ))}
    </div>
  )
}

