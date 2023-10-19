"use client"
import { useColorCarouselRef } from "@/state/colorCarouselState";
import { TColor } from "@/types/home";
import { useEffect, useRef } from "react";
import { ColorCarouselElement } from ".";
import { useEventListener } from "../hooks";

type ColorCarouselImagesProps = {
  colors: TColor[]
}

export default function ColorCarouselImages({ colors }: ColorCarouselImagesProps) {
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
    console.log('handleScrolling triggered')
  }

  useEffect(() => {
    setContainerRef(imagesRef.current)
  }, [])

  useEventListener({
    eventType: "mousedown",
    listener: (e) => {
      console.log('mousedown occurred')
      initialX = (e as MouseEvent).clientX
    },
    target: imagesRef.current,
    persist: true
  })

  useEventListener({
    eventType: "dragstart",
    listener: (e) => {
      console.log('dragstart occurred')
      handleScrolling(e as MouseEvent)
    },
    target: imagesRef.current,
    persist: true
  })



  return (
    <div ref={imagesRef} draggable={false}
      className="noscrollbar  grid select-none snap-x snap-mandatory auto-cols-[23%] grid-flow-col gap-[30px] overflow-x-auto overscroll-x-contain">
      {colors.map(({ id, color, imgUrl, alt }: TColor) => (
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
