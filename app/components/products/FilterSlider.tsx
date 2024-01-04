"use client"
import { useFilterTitleStore } from "@/state/uiState"
import { FilterTitle } from "."
import { useEffect, useState } from "react"


type FilterSliderProps = {
  type: "DISCOUNT" | "PRICE"
}

export default function FilterSlider({ type }: FilterSliderProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(999);
  const [result, setResult] = useState(0)

  useEffect(() => {
    if ((left - right) !== result) {
      setResult(right - left)
    }
  }, [left, right])

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const newLeft = Number(target.value)
    setLeft(Math.min(newLeft, right - 1))
  }
  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const newRight = Number(target.value)
    setRight(Math.max(left + 1, newRight))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = Number(target.value)
    if (target.name === 'left') {
      setLeft(value)
    } else if (target.name === 'right') {
      setRight(value)
    }
  }

  return (
    <div>
      <FilterTitle type={type} />

      {isExpanded && (
        <div className="w-full">
          <div className="slider relative flex">
            <input
              type="range"
              min={0}
              max={999}
              step="1"
              data-direction="right"
              value={right}
              onChange={(e) => handleRightChange(e)}
              className="range_slider pointer-events-none absolute right-0 top-8 z-20 h-[0.12rem] w-full cursor-pointer appearance-none rounded " />
            <input
              type="range"
              min={0} max={999}
              step="1"
              data-direction="left"
              value={left}
              onChange={(e) => handleLeftChange(e)}
              className="range_slider pointer-events-none absolute left-0 top-8 z-20 h-[0.12rem] w-full cursor-pointer appearance-none rounded" />
          </div>
          <div className="flex justify-between">
            <input type="text" name="left" value={left} className="text-bkg mt-12 h-8 w-16" onChange={handleInputChange} />
            <input type="text" name="right" value={right} className="text-bkg mt-12 h-8 w-16" onChange={handleInputChange} />
          </div>
        </div>
      )}
    </div>
  )
}
