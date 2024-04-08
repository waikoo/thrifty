"use client"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import FilterTitle from "@/app/components/products/FilterTitle"
import { useFilterTitleStore } from "@/state/client/filterState"

type FilterConditionProps = {
  type: string
  condition: number[]
}

export default function FilterCondition({ type, condition }: FilterConditionProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedFilters.includes(type))

  const renderStars = (rating: number) => {
    const starRow = []
    for (let i = 0; i < condition[0]; i++) {
      starRow.push(
        i < rating
          ? <AiFillStar key={`fill-${i}`} />
          : <AiOutlineStar key={`outline-${i}`} />
      )
    }
    return starRow
  }

  return (
    <div>
      <FilterTitle
        type={type}
      />

      {isExpanded && (
        <div className="px-8">
          {condition.map((con, i) => {
            return (
              <div key={`div-${i}`} className={"flex"}>
                {...renderStars(con)}
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}
