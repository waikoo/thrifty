/* eslint-disable @next/next/no-img-element */
"use client"
import { Gender } from "@/types/link"
import { RiArrowDropRightFill } from "react-icons/ri"
import { RiArrowDropLeftFill } from "react-icons/ri"
import { useState } from "react";
import { pluralToSingular, removeExtension } from "@/utils/home";

type ColorCarouselImagesProps = {
  images: string[]
  gender: Gender
}

export default function ColorCarouselImages({ images, gender }: ColorCarouselImagesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const rightInvisible = currentIndex < 6 ? '' : 'invisible'
  const leftInvisible = currentIndex > 0 ? '' : 'invisible'

  return (
    <div className="mx-auto relative px-5">
      <div className="flex gap-[1rem] overflow-hidden snap-x snap-mandatory"
      >
        {images.map((filename, i) => (
          <div
            key={filename}
            className={`w-[30rem] ${i === currentIndex || i === currentIndex + 1 ? '' : 'hidden'}`}
          >
            <img
              src={`/images/color_carousel/${gender}/${filename}`}
              alt={`a ${pluralToSingular(gender)} in ${removeExtension(filename)} clothes`}
              className="rounded-[10rem] w-[10rem] w-min-full"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 -right-5 flex justify-between">
        {/* {currentIndex > 0 && */}
        <div onClick={prevSlide} className={leftInvisible}>
          <RiArrowDropLeftFill size={60} color="black" />
        </div>
        {/* } */}
        <div onClick={nextSlide} className={rightInvisible}>
          <RiArrowDropRightFill size={60} color="black" />
        </div>

      </div>
    </div>
  )
}

