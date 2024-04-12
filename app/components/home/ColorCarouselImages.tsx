"use client"
import { useEffect, useRef } from "react";

import { ColorCarouselElement } from "@/app/components/home";
import { colors } from '@/app/components/data/colorCarouselData'
import { useColorCarouselRef } from "@/state/client/colorCarouselState";
import { TColor } from "@/types/home";
import { Gender } from "@/types/link";

type ColorCarouselImagesProps = {
  gender: Gender
}

export default function ColorCarouselImages({ gender }: ColorCarouselImagesProps) {
  const imagesRef = useRef<HTMLDivElement>(null)
  const { setContainerRef } = useColorCarouselRef()

  useEffect(() => {
    setContainerRef(imagesRef.current)
  }, [])

  return (
    <div ref={imagesRef} draggable={false}
      className="noscrollbar grid select-none snap-x snap-mandatory auto-cols-[23%] grid-flow-col gap-[30px] overflow-x-auto overscroll-x-contain">

      {colors[gender].map(({ id, color, imgUrl, alt }: TColor) => (
        <ColorCarouselElement
          key={id}
          color={color}
          imgUrl={imgUrl}
          alt={alt}
        />
      ))}
    </div>
  );
}
