/* eslint-disable @next/next/no-img-element */
"use client"
import { Gender } from "@/types/link"
import { pluralToSingular, removeExtension } from "@/utils/home";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"


type ColorCarouselImagesProps = {
  images: string[]
  gender: Gender
}

export default function ColorCarouselImages({ images, gender }: ColorCarouselImagesProps) {

  return (
    <Carousel className="mx-auto w-full sm:w-[90%] mt-[1.5625rem]">
      <CarouselContent className="mx-auto">

        {images.map((filename) => (
          <CarouselItem
            key={filename}
            className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
          >
            <img
              src={`/images/color_carousel/${gender}/${filename}`}
              alt={`a ${pluralToSingular(gender)} in ${removeExtension(filename)} clothes`}
              className="rounded-[10rem] w-[10rem] mx-auto"
            />
          </CarouselItem>
        ))}

      </CarouselContent>

      <CarouselPrevious variant={'ghost'} />
      <CarouselNext variant={'ghost'} />

    </Carousel>
  )
}

