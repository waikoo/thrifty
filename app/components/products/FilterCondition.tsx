"use client"
import FilterTitle from "./FilterTitle"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useFilterTitleStore } from "@/state/uiState"

type FilterConditionProps = {
  type: string
  condition: number[]
}

export default function FilterCondition({ type, condition }: FilterConditionProps) {
  const isExpanded = useFilterTitleStore((state) => state.expandedComponents.includes(type))

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
