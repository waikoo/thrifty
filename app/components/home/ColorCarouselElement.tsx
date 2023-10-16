"use client"
import { useRef, useState } from "react"
import useEventListener from "../hooks/useEventListener"

type ColorCarouselElementProps = {
  color: string,
  imgUrl: string,
  alt: string
  className?: string
}

export default function ColorCarouselElement({ color, imgUrl, alt, className }: ColorCarouselElementProps) {
  const [isHovered, setIsHovered] = useState(false)
  let localColor = `bg-${color}`

  const imgRef = useRef<HTMLDivElement>(null)

  useEventListener({
    eventType: "mouseenter",
    listener: () => setIsHovered(true),
    target: imgRef.current
  })

  useEventListener({
    eventType: "mouseleave",
    listener: () => setIsHovered(false),
    target: imgRef.current
  })

  return (
    <div className={`relative flex items-center justify-center w-[25%] object-cover ${className}`}
      ref={imgRef}>

      <div className={`w-full h-full absolute text-white font-black flex items-center justify-center ${localColor} ${isHovered ? 'opacity-50' : 'opacity-0'}"`}
        style={isHovered ? { clipPath: 'inset(0 0 0 0)' } : {}}
      >
      </div>

      <span className={`textShadow text-shadow-gray-500 absolute mx-auto text-2xl font-black opacity-100 z-50`}>
        {isHovered ? color.toUpperCase() : null}
      </span>
      <img
        src={imgUrl}
        alt={alt}
        className={`block w-full h-full object-cover h-auto ${isHovered ? 'opacity-50' : null}`} />


      {!isHovered && (
        <img
          src={imgUrl}
          alt={alt}
          className={`absolute left-1/2 top-1/2 h-5/6 w-10/12 -translate-x-1/2 -translate-y-1/2 transform rounded-full object-contain z-40`}
          style={{ clipPath: 'inset(0 0 0 0)' }}
        />
      )}

    </div >

  )
}
