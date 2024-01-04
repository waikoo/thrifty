"use client"
import { useFilterTitleStore } from "@/state/uiState"
import { FilterTitle } from "."
import { useState } from "react"
import { useDbMinMaxValues, useFilterSlider } from "../hooks"

type FilterSliderProps = {
  type: "DISCOUNT" | "PRICE"
}

export default function FilterSlider({ type }: FilterSliderProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(999);
  const [result, setResult] = useState(0)
  useDbMinMaxValues(type, setLeft, setRight, left, right)
  const { handleLeftChange, handleRightChange, handleInputChange } = useFilterSlider(setLeft, setRight, setResult, left, right, result)

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
            <input
              type="text"
              name="left"
              value={`${type === 'DISCOUNT' ? '%' : '€'} ${left}`}
              className="text-bkg mt-12 h-8 w-20"
              onChange={handleInputChange} />
            <span className="text-content mt-12">-</span>
            <input
              type="text"
              name="right"
              value={`${type === 'DISCOUNT' ? '%' : '€'} ${right}`}
              className="text-bkg mt-12 h-8 w-20"
              onChange={handleInputChange} />
          </div>
        </div>
      )}
    </div>
  )
}
