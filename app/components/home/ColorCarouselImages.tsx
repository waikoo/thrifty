"use client"
import { useColorCarouselRef } from "@/state/colorCarouselState";
import { Category, TColor } from "@/types/home";
import { useEffect, useRef } from "react";
import { ColorCarouselElement } from ".";
import { useEventListener } from "../hooks";
import { colors } from '../data/colorCarouselData'

type ColorCarouselImagesProps = {
  category: Category['category']
}

export default function ColorCarouselImages({ category }: ColorCarouselImagesProps) {
  const imagesRef = useRef<HTMLDivElement>(null)
  const { containerRef, setContainerRef } = useColorCarouselRef()
  let initialX = 0;

  const handleScrolling = (e: MouseEvent) => {
    const currentX = e.clientX

    if (containerRef) {
      const imageWidth = containerRef.clientWidth;
      containerRef.scrollTo({
        left: currentX < initialX ? containerRef.scrollLeft - imageWidth : containerRef.scrollLeft + imageWidth,
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    setContainerRef(imagesRef.current)
  }, [])

  useEventListener({
    eventType: "mousedown",
    listener: (e) => {
      initialX = (e as MouseEvent).clientX
    },
    target: imagesRef.current,
    persist: true
  })

  useEventListener({
    eventType: "dragstart",
    listener: (e) => {
      handleScrolling(e as MouseEvent)
    },
    target: imagesRef.current,
    persist: true
  })



  return (
    <div ref={imagesRef} draggable={false}
      className="noscrollbar  grid select-none snap-x snap-mandatory auto-cols-[23%] grid-flow-col gap-[30px] overflow-x-auto overscroll-x-contain">
      {colors[category].map(({ id, color, imgUrl, alt }: TColor) => (
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
