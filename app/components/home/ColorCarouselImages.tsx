"use client"
import { Gender } from "@/types/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"
import ColorCarouselImage from "@/app/components/home/ColorCarouselImage";


type ColorCarouselImagesProps = {
  images: string[]
  gender: Gender
}

export default function ColorCarouselImages({ images, gender }: ColorCarouselImagesProps) {

  return (
    <Carousel className="mx-auto w-full sm:w-[90%] mt-[1.5625rem]">
      <CarouselContent className="mx-auto">

        {images.map((filename, i) => (
          <CarouselItem
            key={filename}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
          >

            <ColorCarouselImage
              index={i}
              filename={filename}
              gender={gender}
            />

          </CarouselItem>
        ))}

      </CarouselContent>

      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />

    </Carousel>
  )
}

