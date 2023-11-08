"use client"
import { useFilterChecking, useFilterTitle } from "../hooks"
import FilterTitle from "./FilterTitle"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
type FilterConditionProps = {
  type: string
  conditions: number[]
}

export default function FilterCondition({ type, conditions }: FilterConditionProps) {
  const { isExpanded, setIsExpanded } = useFilterTitle()

  const renderStars = (rating: number) => {
    const starRow = []
    for (let i = 0; i < conditions[0]; i++) {
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
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
      />

      {isExpanded && (
        <div className="px-8">
          {conditions.map((condition, i) => {
            return (
              <div key={`div-${i}`} className={"flex"}>
                {...renderStars(condition)}
              </div>
            )
          })}
        </div>
      )}

    </div>
  )
}
