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
    <div className={`${clicked} flex items-center gap-2 cursor-pointer p-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => { setIsClicked(true) }}
    >
      <IconSearch isHovered={isHovered} isClicked={isClicked} />

      {isClicked ? (
        <input type="search"
          className={`bg-transparent text-content outline-0 appearance-none focus:outline-none pt-2 w-full self-center placeholda`}
          placeholder="Enter your search here..."
        />
      )
        :
        (<span className={`self-center text-[0.80rem]`}>SEARCH ID</span>)
      }
    </div >
  )
}

