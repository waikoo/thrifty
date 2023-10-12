"use client"
import { Category } from "@/types/home"
import { useState } from "react"
import { ColorCarouselImages } from "./"
import IconArrow from "./IconArrow"


type ColorCarouselGridProps = {
  category: Category['category']
}

export default function ColorCarouselGrid({ category }: ColorCarouselGridProps) {
  const count = 4
  const [clicked, setClicked] = useState(false)

  return (
    <div className="grid grid-cols-[0.5fr_9fr_0.5fr] items-center pt-16">
      <IconArrow
        left
        clicked={clicked}
        setClicked={setClicked}
        className="col-start-1 justify-self-start" />

      <ColorCarouselImages
        category={category}
        count={count}
        clicked={clicked} />

      <IconArrow
        clicked={clicked}
        setClicked={setClicked}
        className="col-start-3 justify-self-end" />
    </div>
  )
}
