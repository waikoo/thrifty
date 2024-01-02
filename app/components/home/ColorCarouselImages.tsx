"use client"
import { useColorCarouselRef } from "@/state/colorCarouselState";
import { Category, TColor } from "@/types/home";
import { useEffect, useRef } from "react";
import { ColorCarouselElement } from ".";
import { useEventListener } from "../hooks";
import { colors } from '../data/colorCarouselData'

type ColorCarouselImagesProps = {
  gender: Category['category']
}

export default function ColorCarouselImages({ gender }: ColorCarouselImagesProps) {
  const imagesRef = useRef<HTMLDivElement>(null)
  const { containerRef, setContainerRef } = useColorCarouselRef()

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
