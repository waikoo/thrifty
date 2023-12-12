"use client"
import { useState } from "react"
import { IconSearch } from "../navigation/icons"

type LayoutMenuItemProps = {
}

export default function LayoutSearchId({ }: LayoutMenuItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const clicked = isClicked ? 'hover:text-content hover:bg-bkg' : 'hover:text-bkg hover:bg-content'

  return (
    <div className={`${clicked} flex whitespace-nowrap self-baseline items-baseline gap-2 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { setIsClicked(true) }}
    >
      <IconSearch isHovered={isHovered} isClicked={isClicked} />

      {isClicked ? (
        <input type="search"
          className={"text-content placeholda w-full appearance-none self-baseline bg-transparent outline-0 focus:outline-none"}
          placeholder="Enter your search here..."
        />
      )
        :
        (<span className={"self-baseline text-[0.80rem]"}>SEARCH ID</span>)
      }
    </div >
  )
}

